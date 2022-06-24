
// question1
let average1 = 96-88;
let average2 = 108-91;
let average3 = -(89-110);
console.log("le average scores"+ average1 , average2 , average3);
// question2
let total_score_team1 = 96+108+89;
let total_score_team2 = 88+91+110;

if( total_score_team1 >  total_score_team2){
    console.log("team1 dolphins win");
}
else if( total_score_team1 < total_score_team2){
    console.log("team koalas win");
}
else{
    console.log("draw");
}
//bonus1
let scoreDolphins1 = 97;
let scoreDolphins2 = 112;
let scoreDolphins3 = 101;

let scoreKoalas1 = 109;
let scoreKoalas2 = 95;
let scoreKoalas3 = 123;

// round 1
if((scoreDolphins1<scoreKoalas1)&&(scoreKoalas1 >=100)){
    console.log("team koala win");
}
else if ((scoreKoalas1<scoreDolphins1)&&(scoreDolphins1>=100)) {
    console.log("team dolphins win");
}

// round 2
if((scoreDolphins2<scoreKoalas2)&&(scoreKoalas2>=100)){
    console.log("team koala win");
}
else if ((scoreKoalas2<scoreDolphins2)&&(scoreDolphins2>=100)) {
    console.log("team dolphins win");
}


// round 3
if((scoreDolphins3<scoreKoalas3)&&(scoreKoalas3 >=100)){
    console.log("team koala win");
}
else if ((scoreKoalas3<scoreDolphins3)&&(scoreDolphins3>=100)) {
    console.log("team dolphins win");
}

//bonus2
let scoreDolphins1_2 = 97;
let scoreDolphins2_2 = 112;
let scoreDolphins3_2 = 101;

let scoreKoalas1_2 = 109;
let scoreKoalas2_2 = 95;
let scoreKoalas3_2 = 123;

//round1 
if ((scoreDolphins1_2 === scoreKoalas1_2 )&&(scoreKoalas1_2 >=100)&&(scoreKoalas3_2>=100)){
    console.log("draw");
}
else {
    console.log("no team wins the trophy")
}
//round2
if ((scoreDolphins2_2 === scoreKoalas2_2 )&&(scoreKoalas2_2 >=100)&&(scoreKoalas2_2>=100)){
    console.log("draw");
}
else {
    console.log("no team wins the trophy")
}
//round3
if ((scoreDolphins3_2 === scoreKoalas3_2 )&&(scoreKoalas3_2 >=100)&&(scoreKoalas3_2>=100)){
    console.log("draw");
}
else {
    console.log("no team wins the trophy")
}