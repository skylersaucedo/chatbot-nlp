const {dock, dockStart} = require('@nlpjs/basic'); // create artifacts and containers
const {NlpAnalyzer} = require('@nlpjs/utils'); // import analyzer utils
const corpus = require('./data/corpus-test-en.json');

// looking at training..

// (async() => {
//     const dock = await dockStart();
//     const nlp = dock.get('nlp');
//     await nlp.train();

//     const result = await nlp.process('When is your birthday?');
//     console.log(result);
//     console.log(result.answer);
// })();

async function trainFn(corpus){
    const nlp = dock.get('nlp');
    nlp.addCorpus(corpus);
    await nlp.train()
    return nlp

}

function testFn(utterance, nlp){

    return nlp.process(utterance);

}

// use this to generate a report on training/testing nlp model as .xlsx

// (async() => {
//     await dockStart();
//     const analyzer = new NlpAnalyzer();
//     const analysis = await analyzer.analyze(corpus, trainFn, testFn);
//     await analyzer.generateExcel('./measure.xlsx', analysis);
//     console.log(analysis)
// })();


// use this to converse with your bot in the console

(async() => {
    await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
})();