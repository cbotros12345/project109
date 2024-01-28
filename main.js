function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eGa6HQa0a/model.json", modelReady);
}
function modelReady()
{
   classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) 
    {
        console.error(error);
    } else 
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() *  255) + 1;
        random_number_g = Math.floor(Math.random() *  255) + 1;
        random_number_b = Math.floor(Math.random() *  255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+' %';
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Cat');
        img1 = document.getElementById('Dog');
        img2 = document.getElementById('Monkey');
        img3 = document.getElementById('Lion');

        if (results[0].label == "Lion Roaring")
        {
            img.src = 'Lion_roar.gif'
            img1.src = 'Dog.jpg'
            img2.src = 'Cat.jpg'
            img3.src = 'Monkey.jpg'
        }
       else if (results[0].label == "Dog Barking")
        {
            img.src = 'Lion.jpg'
            img1.src = 'Dog_barking.gif'
            img2.src = 'Cat.jpg'
            img3.src = 'Monkey.jpg'
        }
        else if (results[0].label == "Cat meowing")
        {
            img.src = 'Lion.jpg'
            img1.src = 'Dog.jpg'
            img2.src = 'cat_meowing.gif'
            img3.src = 'Monkey.jpg'
        }
        else if (results[0].label == "Monkey screaming")
        {
            img.src = 'Lion.jpg'
            img1.src = 'Dog.jpg'
            img2.src = 'Cat.pjpg'
            img3.src = 'monkey_screaming.gif'
        }
        else
        {
            img3.src = 'w.jpg'
        }
    }
}