$(document).ready(function() {
  var deck = [];
  for(var i = 0; i < 52; i++)
  {
    var card;
    if(i%13 === 0)
    {
      card = "ace";
    }else
    if(i%13 === 10)
    {
      card = "jack";
    }else
    if(i%13 === 11)
    {
      card = "queen";
    }else
    if(i%13 === 12)
    {
      card = "king";
    }else{
      card=i%13+1;
    }
    card+= " of ";
    if(i<13)
    {
      card+="spades";
    }else if(i<26)
    {
      card+="hearts";
    }else if(i<39)
    {
      card+="clubs";
    }else
    {
      card+="diamonds";
    }
    deck.push(card);
  }
  console.log(deck);
});
