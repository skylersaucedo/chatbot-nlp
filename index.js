const {dockStart} = require('@nlpjs/basic'); // create artifacts and containers

(async() => {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();

    const result = await nlp.process('When is your birthday?');
    console.log(result);
    console.log(result.answer);

})();