const knex = require('../db/connection');

async function findBestResponse(req, res, next) {
    const input = req.body.data;
    try {
        const responses = await knex('chatbot').select('chat_id', 'keywords');
        let matchCounts = {}; 
        responses.forEach((response) => {
            const keywordArray = response.keywords.split(',');
            keywordArray.forEach((keyword) => {
                if (input.toLowerCase().includes(keyword.trim().toLowerCase())) {
                    if (!matchCounts[response.chat_id]) {
                        matchCounts[response.chat_id] = 1;
                    } else {
                        matchCounts[response.chat_id]++; 
                    }
                }
            });
        });

        let maxCount = 0;
        let match = null;
        Object.keys(matchCounts).forEach((chat_id) => {
            if (matchCounts[chat_id] > maxCount) {
                maxCount = matchCounts[chat_id];
                match = chat_id;
            }
        });
        req.match = match;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = findBestResponse;

