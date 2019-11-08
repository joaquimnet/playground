const quotes = ["Our greatest glory is not in never falling, but in rising every time we fall. — Confucius","All our dreams can come true, if we have the courage to pursue them. – Walt Disney","It does not matter how slowly you go as long as you do not stop. – Confucius","Everything you’ve ever wanted is on the other side of fear. — George Addair","Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill","Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis","Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett","I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela","There is only one thing that makes a dream impossible to achieve: the fear of failure. ― Paulo Coelho","It’s not whether you get knocked down. It’s whether you get up. – Vince Lombardi","Your true success in life begins only when you make the commitment to become excellent at what you do. — Brian Tracy","Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. – Chantal Sutherland","Definiteness of purpose is the starting point of all achievement. – W. Clement Stone","Too many of us are not living our dreams because we are living our fears. – Les Brown","If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer","Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak. – Thomas Carlyle","Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar","If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you. – Les Brown","Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley","Believe you can and you’re halfway there. — Theodore Roosevelt","Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. – Unknown","Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis of Assisi","I attribute my success to this: I never gave or took any excuse. – Florence Nightingale","Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life. ― Tony Robbins","Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. — Dale Carnegie","Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi","Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich","The future belongs to those who believe in the beauty of their dreams – Franklin D. Roosevelt","I am not a product of my circumstances. I am a product of my decisions. — Stephen Covey","Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett","You’re going to go through tough times – that’s life. But I say, ‘Nothing happens to you, it happens for you.’ See the positive in negative events. – Joel Osteen","Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. – Helen Keller","If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily. ― Jack Canfield","Whatever the mind can conceive and believe, it can achieve. ― Napoleon Hill","Don’t wish it were easier. Wish you were better. ― Jim Rohn","It is during our darkest moments that we must focus to see the light. — Aristotle Onassis","It’s not about perfect. It’s about effort. And when you bring that effort every single day, that’s where transformation happens. That’s how change occurs. – Jillian Michaels","Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. – Pele","Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers","Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. – Denis Waitley","We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis","Fortune always favors the brave, and never helps a man who does not help himself. – P. T. Barnum","Go confidently in the direction of your dreams. Live the life you have imagined. –Henry David Thoreau","If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want. – Zig Ziglar","The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson","Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi","Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll","If you don’t like something, change it. If you can’t change it, change your attitude. – Maya Angelou","You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own. – Mark Victor Hansen","Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino"];

quotes.forEach((phrase) => {
  const node = document.createTextNode(phrase);
  const span = document.createElement("SPAN");
  span.appendChild(node);
  span.classList.add('phrase');
  span.style.fontSize = 0.5 + Math.random() * 2 + 'rem';
  span.addEventListener('click', () => span.style.color = 'white');
  document.querySelector('body').appendChild(span);
})