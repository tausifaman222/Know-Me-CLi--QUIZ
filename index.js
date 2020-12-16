const readLineSync = require('readline-sync');
const questions = [
    {
        question: 'How Old is Tausif?',
        options: {
            a: '25',
            b: '18',
            c: '20+',
            d: '35'
        },
        correctAns: 'c'
    },
    {
        question: 'Where is Tausif\'s Hometown?',
        options: {
            a: 'Haldia',
            b: 'Kolkata',
            c: 'Mumbai',
            d: 'Bardhaman\'s Bismal'
        },
        correctAns: 'a'
    },
    {
        question: 'How did Tausif spend his quarantine time ?',
        options: {
            a: 'Playing CS:Go',
            b: 'Playing Valorant',
            c: 'Building/Recommending Custom Gaming PC',
            d: 'Hunting for New Coding challenges'
        },
        correctAns: 'b'
    },
    {
        question: 'What title did Tausif earn in CEMK?',
        options: { 
            a: 'Foodie',
            b: 'Motu',
            c: 'Kanjoosh',
            d: 'Noobra Player'
        },
        correctAns: 'a'
    },
    {
        question: 'What is Tausif\'s Dream Job Domain?',
        options: {
            a: 'CyberSecurity Analyst',
            b: 'Web Developer',
            c: 'Mobile Apps Developer',
            d: 'Esports Game Development'
        },
        correctAns: 'd'
    },
    {
        question: 'What is Tausif\'s Favorite Dish?',
        options: {
            a: 'Biryani with Mutton rezala',
            b: 'Mixed Pulao with Tikka',
            c: 'Daal,Bhaat.Sabji',
            d: 'Continental Dishes'
        },
        correctAns: 'a'
    },
    {
        question: 'What does Tausif Ride?',
        options: { 
            a: 'Hyundai i20 Active',
            b: 'HEro Splendor PLus',
            c: 'BSA PHoton Aspire',
            d: 'All of the above'
        },
        correctAns: 'd'
    },
    {
        question: 'What is Tausif\'s Favourite Webseries?',
        options: {
            a: 'Mr.Robot & Money Heist ',
            b: 'Scam 1992 &  Special Ops ',
            c: 'Scacred Games  1 & 2',
            d: 'Breaking Bad & Mirzapur 1 @ 2'
        },
        correctAns: 'a'
    },
    {
        question: 'Is Tausif Interested in getting engaged or be SAkht Launda?',
        options: {
            a: 'Koi Nahi Pategi Usse',
            b: 'Sabar ka Fal Mitha HOta hai',
            c: 'Pyaar ka agey kuch bhi nahi',
            d: 'GAMERS Jindabad'
        },
        correctAns: 'd'
    },
    {
        question: 'Is Tausif Moody ?',
        options: {
            a: 'Yes',
            b: 'No',
            c: 'Sometimes',
            d: 'Too hard to predict'
        },
        correctAns: 'c'
    }
]
const chalk = require('chalk');
const log =console.log;
function quizPlay(){
    let currScore = 0, Ans;
    let quesNo = 1;
    
    const name = readLineSync.question(chalk.redBright.bold('Enter Your Name Please ? '));
    
    log(chalk.magentaBright.bold(chalk`Welcome {bgGreenBright.bold.italic ${name}}  !\n Quech Your Thirst About Knowing 👋 TAUSIF `));
    log(chalk.greenBright("N.B- Type a/b/c/d for Your answer --"));


    for(let i = 0;i<questions.length;i++){
        
        log(chalk.bold`\n${quesNo++}.{bgCyanBright ${questions[i].question}}\n`);
        
        let srcol= chalk.bgMagentaBright.bold;
        let opcolor = chalk.bold.cyanBright;

        log(`${srcol('a:')} ${opcolor(questions[i].options.a)}\n${srcol('b:')} ${opcolor(questions[i].options.b)}\n${srcol('c:')} ${opcolor(questions[i].options.c)}\n${srcol('d:')} ${opcolor(questions[i].options.d)}`);
        Ans = readLineSync.question('Choose Your Answer : ');
        if(Ans.toLowerCase() === questions[i].correctAns){
            log(chalk.greenBright.italic('\nRight Answer  ✅ ✅ !'));
            log(chalk.yellowBright('╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬'));
            currScore+=1;
            log(`Current Credits: ${currScore}`);
        }else{
            log(chalk.redBright('\nSorry You are Wrong! 👎'));
            log(chalk.redBright('═══════════════════════'));
            log(chalk.cyanBright`Right Answer: ${questions[i].correctAns}`);
            log(chalk.greenBright`Current Credits: ${currScore}`);
        }
    }
    
    log(chalk.yellowBright.bold.italic `Finally !! Your total Credits Earned: ${currScore}😎😎😎` );
    log(chalk.red.bold("++++++++++++++++++++++++++++++++++++++++++"));    
}

quizPlay();