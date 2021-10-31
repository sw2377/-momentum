const quotes = [
    {
        quote: "Everything that one thinks about a lot becomes problematic.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Plans are only good intentions unless they immediately degenerate into hard work.",
        author: "Peter Drucker"
    },
    {
        quote: "Much learning does not teach understanding.",
        author: "Heraclitus"
    },
    {
        quote: "Small opportunities are often the beginning of great enterprises.",
        author: "Demosthenes"
    },
    {
        quote: "Good teaching is one-fourth preparation and three-fourths theater.",
        author: "Gail Godwin"
    },
    {
        quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        author: "Warren Buffett"
    },
    {
        quote: "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is counted sweetest by those who ne'er succeed.",
        author: "Emily Dickinson"
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        quote: "Time crumbles things; everything grows old under the power of Time and is forgotten through the lapse of Time.",
        author: "Aristotle"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;