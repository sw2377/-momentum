const quotes = [
    {
        quote: "We are all traveling through time together, everyday of out lives. All we can do is do out best to relish this remarkable ride.",
        author: "About time"
    },
    {
        quote: "You can't love someone if you don't love yourself first",
        author: "Beauty and the Beast"
    },
    {
        quote: "There's no time limit. Start whenever you want",
        author: "The Curious Case of Benjamin Button"
    },
    {
        quote: "Loved you sincerely, I live worthy though I lived just a day. It dosen't matter if you have five minutes of fifty years.",
        author: "If only"
    },
    {
        quote: "This is actually happening. What do you think is interesting? Funny? What do you think is important? You know? Every day's our last.",
        author: "Before Sunset"
    },
    {
        quote: "Sometimes it is the people no one imagines anything of who do you things that no one can imagine.",
        author: "The Imitation Game"
    },
    {
        quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
        author: "Dead Poets Society"
    },
    {
        quote: "I want love or death, That's it.",
        author: "Leon"
    },
    {
        quote: "People love what other people are passionate about.",
        author: "La La Land"
    },
    {
        quote: "I figure life is a gift and I don't intend on wasting it. You never know what hand you're gonna get dealt next.",
        author: "Titanic"
    }
];


const author = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = "🎬 " + todayQuotes.author;

function showTheAuthor() {
    author.classList.add("on");
    quote.classList.add("on");
}

function hideTheAuthor() {
    author.classList.remove("on");
    quote.classList.remove("on");
}

quote.addEventListener("mouseover", showTheAuthor);
quote.addEventListener("mouseleave", hideTheAuthor);