import random

def handler (event, context):
    quotes = [
  { id: 1, "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
  { id: 2, "quote": "Do not wait for leaders; do it alone, person to person.", "author": "Mother Teresa" },
  { id: 3, "quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein" },
  { id: 4, "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
  { id: 5, "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "author": "Zig Ziglar" },
  { id: 6, "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
  { id: 7, "quote": "It always seems impossible until it's done.", "author": "Nelson Mandela" },
  { id: 8, "quote": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs" },
  { id: 9, "quote": "Happiness is not something ready made. It comes from your own actions.", "author": "Dalai Lama" },
  { id: 10, "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" }
]


    random_quote = random.sample(quotes, 1) [0]
    print(random_quote)