"use strict";

var quotes = ["Pivot! Pivot! Pivot! -Ross", "They don’t know that we know they know we know!” -Pheobe", "How you doin? - Joey", "We were on a break! -Ross", "I’m not so good with the advice... Can I interest you in a sarcastic comment? - Chandler", "Welcome to the real world. It sucks. You're gonna love it. -Monica", "It’s like all of my life everyone has always told me, ‘You’re a shoe, you’re a shoe, you’re a shoe, you’re a shoe.’ And then today I just stopped and I said, ‘What if I don’t want to be a shoe? What if I want to be a purse, you know? Or, a hat?' -Rachel", "Oh, are you setting Ross up with someone? Does she have a wedding dress? -Rachel", "It’s a moo point. It’s like a cow’s opinion; it doesn’t matter. It’s moo. -Joey", "I can handle this. ‘Handle’ is my middle name. Actually, ‘handle’ is the middle of my first name. -Chandler"];

function quoteRandomizer() {
  var i, j, k;
  for (i = quotes.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = quotes[i];
    quotes[i] = quotes[j];
    quotes[j] = k;
  }
  document.getElementById("quote-insert").innerHTML = quotes[0];
};