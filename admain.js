const fileExplorer = document.getElementById('fileExplorer');
const friends = document.getElementById('friends'); 
const gallery= document.getElementById('gallery'); 
const photos = document.getElementById('photos'); 
const image = document.getElementById('image');
const read = document.getElementById('read');
let check; 
let isOriginal = true;

//OUTFIT CODE

 function toggleImage() {
        image.style.display = 'block';

            if (isOriginal) {
                image.src = "me2.png";
            } else {
                image.src = "me.png";
            }

            isOriginal = !isOriginal;
        }

// GENERAL FOLDER CODE

function openFileExplorer() {
    fileExplorer.style.display = 'block';
    check = '.file-explorer'; 
}

function openFriends() {
    friends.style.display = 'block';
    check = '.friends'; 
}

function openGallery() {
    gallery.style.display = 'block';
    check = '.gallery'; 
}

function openPhotos() {
    photos.style.display = 'block';
    check = '.photos'; 
}

function openRead() {

        check = '.read'; 
        const readContent = document.getElementById('readContent');

        let readcontent = '<p><b>Welcome!</b></p> <p>    The Austin Dimension is what I call my "mind palace". I always like to think of my brain as a computer, so I thought it would be a cool metaphor to make my creative portfolio a visual representation of what I envision the Austin Operating System™ would look like. This site exists as the whimsical counterpart to my professional portfolio, which can be accessed by clicking the brain icon in the bottom left corner of the screen. This is my first website, but I plan to update it as my web development skills improve. Enjoy your stay! :) </p><p><b><u>Current Projects:</u></b><br> <b>(DONE) Documents:</b> poetry(?) from highschool and also recently. done until i feel inclined to write more ;> <br> <b>(WIP) Friends:</b> cameos of those closest to me <3 <br> <b>(WIP) Gallery:</b> anything that is traditional/digital one-off art <br> <b>(WIP) Photos:</b> pictures I took or I think are funny <br> <b>(DONE) Switch Look:</b> just click the button, trust. will add more when i draw more <br> <b>(SOON) Projects:</b> collections of related pieces/concept art <br> <b>(SOON) Translator:</b> ever wanted to know what color your name canonically is in my brain? :) <br> <b>(SOON) *creative spotify ripoff name*:</b> shameless playlist plug and the timeline of my life in music <br> <b>(SOON) Socials:</b> going to put these in taskbar but its probably just going to be discord (mister.blu) and github (misterbluuu) unless Meta fixes its hate speech policy 💀';


        readContent.innerHTML = readcontent;
        read.style.display = 'block';
    }

let offsetX = 0, offsetY = 0;

function openFolder(folderId) {
    document.querySelectorAll(check).forEach(explorer => explorer.style.display = 'none');
    document.getElementById('folder' + folderId).style.display = 'block';
}

function closeFileExplorer(explorerId) {
    document.getElementById(explorerId).style.display = 'none';
}

// DOCUMENT CODE

        function showDocument(documentTitle) {
    const documentViewer = document.getElementById('documentViewer');
    const documentContent = document.getElementById('documentContent');
    const documentTitleElem = document.getElementById('documentTitle');

    documentTitleElem.textContent = documentTitle;

    let content = '';
    if (documentTitle === 'J') {
        content = `
            <p>When we met,<br>
            It was spring.<br>
            A new feeling budding in my chest,<br>
            A little prickle I couldn’t ignore.<br>
            You intrigued me.<br>
            I wanted to be with you,<br>
            Around you,<br>
            Close to you.<br>
            It was fresh,<br>
            New,<br>
            Exciting.</p>
            
            <p>Summer arrived before long,<br>
            And we grew closer.<br>
            You caressed my heart with your warm embrace.<br>
            Carefree days,<br>
            Wasted time,<br>
            It was all so precious.<br>
            At the height of it,<br>
            it was bright yellow and red.<br>
            It felt like I was burning alive,<br>
            In the best way possible.<br>
            Overwhelming,<br>
            Terrifying,<br>
            I lost myself in it.<br>
            We were in our own world.<br>
            My cheeks were flushed,<br>
            My heart beat fast,<br>
            I was overcome by you.</p>
            
            <p>Fall came next,<br>
            And the roaring wildfire<br>
            Softened to a warm glow.<br>
            It was comfortable,<br>
            Quiet,<br>
            Safe.<br>
            It somehow felt that we were even more deeply connected than before,<br>
            And that we would be there for each other,<br>
            Always.<br>
            You would say such sweet things,<br>
            That would bring me to tears.<br>
            I loved you entirely.<br>
            The fireworks were gone,<br>
            But the trails of smoke still floated above us,<br>
            As we lay in golden leaves.<br>
            It was as if we no longer needed words.<br>
            The flames had become embers,<br>
            But they were stronger than before.</p>
            
            <p>Then, the weather started to turn.<br>
            The frigid wind picked up,<br>
            And it felt as if I was being carried away,<br>
            Farther from you.<br>
            Storms blew in,<br>
            And it was hard to see you in the blizzard,<br>
            I called out to you,<br>
            But my voice was lost<br>
            In the total silence of the snow.<br>
            My heart was freezing over.<br>
            Empty,<br>
            Apathetic,<br>
            Alone.<br>
            My love was locked behind a wall of ice.</p>

            <p>Everything was silent,<br>
            As the snow blanketed the place we once called home.<br>
            I lay here as flakes brush against my face,<br>
            Looking up at the pale sky,<br>
            Wondering if spring will come again.</p>`;
    } else if (documentTitle === 'entropy') {
        content = `
            <p>I am sitting in a room.<br>
            Surrounded by people.<br>
            They carry conversations,<br>
            But I stay silent.<br>
            I keep my eyes down,<br>
            But I am not looking at anything.<br>
            I am staring into an endless ocean.</p>

            <p>Once, it was a glass.<br>
            It was finite.<br>
            It contained liquid entropy,<br>
            Which was generated by pain.<br>
            Suffering.<br>
            Fear.<br>
            For every negative emotion I felt,<br>
            The glass would fill a little more.<br>
            Every once in a while I would pour it down the drain.<br>
            Ready to be filled again.</p>
            
            <p>Before I knew it,<br>
            I was emptying it every day.<br>
            No matter.<br>
            I replaced it with a bucket.<br>
            It solved the issue for a while,<br>
            But it began to overflow.<br>
            I didn’t care enough to keep up with emptying it.</p>

            <p>Eventually, I opted for a tub.<br>
            It held more,<br>
            But it was enticing.<br>
            I was drawn to it.<br>
            I closed my eyes for a while<br>
            And by the time I opened them,<br>
            I was laying in it.<br>
            The darkness pressed against my skin.<br>
            It was almost comforting.<br>
            The entropy runs down the sides of it,<br>
            But I don’t move to pull the plug on the drain.</p>

            <p>Slowly the room floods.<br>
            I watch as it laps up against the walls,<br>
            Staining them jet black.<br>
            I breathe in.<br>
            Liquid.<br>
            I jump up, coughing and wiping my mouth.<br>
            I am waist deep in despair.</p>

            <p>I run to grab a mop,<br>
            But its flooding in from every direction.<br>
            I try to fight it, but my head is pulled under.<br>
            I breathe deeply,<br>
            Filling my lungs.<br>
            I dont drown.<br>
            It doesn’t even hurt.<br>
            I feel nothing.<br>
            I let it take me.</p>`;
     } else if (documentTitle === '80HD (abridged)') {
        content = `
        <p>Its crushing.<br>
But from the inside out.<br>
My heart is full of static electricity.<br>
The pop rocks in my chest will not let me rest.<br>
I feel like I am going to explode.</p>

<p>Is it because there is not enough to keep me occupied,<br>
Or is it just too much?<br>
Too open ended.<br>
Not enough structure.<br>
No wall of obligation keeping the fog at bay.<br>
It seeps from my chest into my head. <br>
I cant think straight. <br>
I feel like I am going to explode.</p>

<p>My eyes are open but I can barely see.<br>
I can’t focus on anything.<br>
My senses are dulled. <br>
Thoughts flit by faster than I can process them.<br>
There are so many tabs open in my brain.<br>
Everything is so loud and overwhelming,<br>
Though the room is silent.<br>
I am going to explode.</p>

<p>I just pace<br>
Back and forth<br>
Back and forth<br>
Back and forth.<br>
I have so much energy,<br>
But no way to expel it.<br>
Its maddening.<br>
This room feels like a prison.<br>
Its so physical its hard to believe its just my brain playing tricks on me.<br>
I am going to explode.</p>

<p>I cant get out of my own head.<br>
I dont know how to cope,<br>
How to stop something that isnt there.<br>
I consciously know none of it is real,<br>
But the outside of my brain is so far away it makes no difference.<br>
Is this how it feels to explode? </p>
`;
} else if (documentTitle === 'on friendship (abridged)') {
        content = `
        <p>The way I feel about you is reflected by the ocean.<br>
The ebb and flow of the tides<br>
Are parallel to my emotions.</p>
<p>On one end of it, <br>
I just want to trust you completely. <br>
I’m so excited to have a friend like you. <br>
The time we spend together flies by, <br>
And there’s never a dull moment. <br>
I tell you things about myself no one else has ever heard. <br>
I want you to understand what it’s like inside my head. <br>
I feel close to you. <br>
I feel safe with you. </p>

<p>But then the tide recedes. <br>
I think of other people I have felt this way about. <br>
At one point I truly believed they were my friends, <br>
And that we would stay close for years to come. <br>
I devoted myself to them. <br>
I felt a bond with them that I had not felt with anyone else. </p>

<p>But that began to change. <br>
What was formerly a strong connection <br>
Began to turn into an imprisonment. <br>
I was scrutinized for every action. <br>
I could never get a moment alone. <br>
It was suffocating. <br>
Everything I did without them was wrong. <br>
When I stood up for myself, <br>
They dropped me. <br>
And I was alone again, <br>
Left with only the longing for closeness with others, <br>
And a fear of betrayal. </p>

<p>I want to believe that it will be different this time. <br>
I would love nothing more than to grow close to you, <br>
And for us to have a friendship unlike anything I have experienced before, <br>
But I’m afraid. </p>

<p>I was once told that it was unlikely I would be able to handle being let down again, <br>
By someone I trusted so much. <br>
How many times has that happened since then? <br>
I was told that I’m the problem, <br>
The common denominator, <br>
So there must be something wrong with me, <br>
Right? <br>
Sometimes it feels hopeless to wish to be close with someone again, <br>
But I am willing to try. <br>
`;
} else if (documentTitle === 'on conversations') {
        content = `
<p>I long to have conversations <br>
With interesting people <br>
About interesting things. <br>
The kind of subjects that are <br>
Green and blue and purple to talk about. </p>

<p> Where I can give up <br>
My fake and orange disguise <br>
To become my true green self once again. <br>
This side of me is the real side, <br>
The calm and collected, <br>
Always knows what to say at the right time side. <br>
The side where I can let my guard down. </p>

<p> This is my favorite side, <br>
For I can talk with all of the other <br>
Green and blue and purple people <br>
About important and meaningful things. </p>

<p>For a majority of my time <br>
I live life in a haze <br>
Of red and orange and yellow. <br>
Being what I think people want to see, <br>
Making small talk <br>
About things no one cares about. <br>
But where is the fun in that? </p>

<p> The best conversations, <br>
At least in my experience, <br>
Are those that allow you to let go, <br>
To speak freely about what you <br>
Think and feel and believe, <br>
And allow others to do the same, <br>
And respect each other for it. </p>

<p> I want to talk for hours, <br>
About the most obscure of topics, <br>
With the most obscure of people. <br>
I just want to be listened to. </p>
`;
} else if (documentTitle === 'invisible box') {
        content = `
<p> I exist inside of an invisible box <br>
In which the walls are made of one-way glass. <br>
I can see out, <br>
But no one can see me. <br>
It lets me hide. <br>
I can talk to people, <br>
Sometimes. <br>
But I can’t get too close to them, <br>
Because the box is in the way. </p>

<p> Long ago <br>
I didn’t have this box. <br>
I didn’t need it. <br>
Over time, <br>
However, <br>
I began to build it. <br>
I took the broken pieces of <br>
Something <br>
And I built walls. <br>
They kept people out <br>
And feelings in. <br>
It was good. <br>
Safe. </p>

<p> Then it happened. <br>
I didn’t need this box anymore, <br>
I could finally take down the walls that kept me from feeling. <br>
I soon realized though, <br>
That I had built them too well, <br>
And that they had trapped me. <br>
I still can’t figure out how to be free. </p>
`;
} else if (documentTitle === 'perception') {
        content = `
<p> You are incredible. <br>
With your kind heart, <br>
Brilliant mind, <br>
Bright eyes. <br>
Always so eager to learn. <br>
You get excited over the smallest things. <br>
It’s as if you wake up every day and see the world again <br>
For the very first time. <br>
Your face always lights up when you explain something, <br>
Like if it’s the most wonderful topic in the world. <br>
Seeing you happy always makes me smile. <br>
You always want to be a part of something, <br>
To belong. <br>
To work towards something bigger than yourself. <br>
You’re so kind. <br>
You tend to step back, <br>
Hide in the shadows, <br>
Let others take the spotlight. <br>
I still only see you. <br>
I can’t wait to see what you do next. </p>
`;
} else if (documentTitle === 'camera') {
        content = `
<p> You are so elegant. <br>
I see you up there, <br>
On your pedestal. <br>
Or is it my pedestal, <br>
That I merely have conjured for you? <br>
I see you as graceful, <br>
Beautiful, <br>
Perfect, even. <br>
I don’t think I can compare. </p>

<p> But how do you see me? <br>
How do you see you? <br>
Perception is relative. <br>
Everyone views the world through their own lens, <br>
Distorted by their beliefs, <br>
Distorted by their values. <br>
No two people see the world the exact same way. <br>
That’s what makes the definitive line, <br>
Between right and wrong, <br>
Black and white, <br>
Good and evil, <br>
A concept that is simply impossible. </p>

<p> But yet here you are, <br>
Standing right in front of me, <br>
Staring into my soul. <br>
How do I look through your lens? </p>
`; 
} else if (documentTitle === 'boy (abridged)') {
        content = `
<p> I could hurl all of the colorful language at the world at you, <br>
But you wouldn’t care. <br>
I could threaten to fight you, <br>
But you’d just laugh it off. <br>
Why won’t you take me seriously <br>
When I tell you I’m not here just for your entertainment? </p>

<p> I hate assumptions being made of me, <br>
Just because of who I was born as. <br>
Have you ever considered the fact that, <br>
Maybe I’m not happy with myself? <br>
Maybe I want to be like you? <br>
Why can’t you see this? <br>
Why won’t you look when I show you? </p>

<p> If you approached me <br>
For the sole reason that I was acting different from the rest, <br>
Why treat me the same? <br>
I don’t think I’m special. <br>
All I want is to make friends with people <br>
That I find interesting. <br>
These precedents get in the way, <br>
And I’m regarded as something I’m not trying to be. <br>
I don’t particularly like me. <br>
Why couldn’t I be like you? </p>
`;
} else if (documentTitle === 'sister') {
        content = `
<p>You taste of sharp copper. <br>
You’re the color of metal. <br>
Everything about you seems <br>
As if it’s been made in a factory. <br>
When you smile, <br>
It glows too bright. <br>
Fireflies give off light too, you know. <br>
When you laugh, <br>
It seems forced. <br>
Laughing is supposed to come easy to you. </p>

<p> When you speak to me, <br>
You do it in such a passive aggressive way. <br>
You’ll put yourself down, <br>
With the specific intention of me <br>
Telling you what you want to hear. <br>
You have my answers scripted out, <br>
And are willing to pin me, <br>
Or anyone for that matter, <br>
Into a corner until you get them <br>
Manufactured perfectly, <br>
However you desire. <br>
I hate it. </p>

<p> You get defensive when I tell you, <br>
You don’t have to try so hard. <br>
You think everyone cares so much, <br>
When in reality they don’t. <br>
You ridicule me for my choices, <br>
But why? <br>
In some deep and twisted way, <br>
Is this your way of showing you care? <br>
About me? <br>
That you don’t want me to get hurt <br>
In this world that you see with your eyes closed? </p>

<p> Thinking about it now, <br>
It’s actually rather touching. <br>
However, it still doesn’t change the fact that <br>
You don’t realize you can be yourself. <br>
You can let your guard down, you know. <br>
Leave the house without makeup, <br> 
And wear the same shirt twice <br>
In the same month. <br>
If anyone ridicules you, <br>
What does it say about them? <br> 
You really don’t have to try so hard. </p>
`;
} else if (documentTitle === 'one sided') {
        content = `
<p> How can a million miles, <br>
Fit into less than a meter? <br>
How can I stand here, <br>
Knowing you’re right next to me, <br>
Yet feel like we’re worlds apart? <br>
How is it we barely talk, <br>
Yet so much is said between us. </p>

<p>Is there anything said,<br>
Or is it just my wishful thinking again? <br>
I really don’t know. <br>
I get too many mixed signals from you, <br>
Or is it that I’m just interpreting them wrong? <br>
I can’t be certain of anything I feel, <br>
Because I can’t be certain of myself. </p>

<p> I’m so used to trusting my intuition. <br>
Things are straight-forward and neat in my head. <br>
I take definitive observations, <br>
And compile them until I get a logical answer. <br>
I figure out how things work, <br>
Why people do and say things, <br>
I make sense of them.<br>
I can’t make sense of you. </p>
`;
} else if (documentTitle === 'one sided ii') {
        content = `
<p>I sit near you.<br>
Not next to you, <br>
But you’re still close to me. <br>
It’s okay though, <br>
Because being around you <br>
Feels like the pale pinks, <br>
Muted oranges, <br>
And pastel yellows <br>
Of the morning sunrise. </p>

<p> We walk near each other, <br>
Not with. <br> 
I’m afraid to get to close to you, <br>
As I fear I tend to bother those around me. <br>
Still, <br>
Being near you feels like a brilliant morning. <br>
The ground is dewey, <br>
But the air is warm. <br>
It’s heavy, <br>
But in a comforting way. <br>
The sun reflects off of a million tiny crystals,<br>
That lie among the grass. </p>

<p> You look like a perfect spring day. <br>
Golden clouds, <br>
Painted across a pale blue sky. <br>
You laugh like a cool summer night. <br>
Fireflies and leaves, <br>
Under a sky full of stars. </p>

<p>I want to give all of these experiences to you, <br>
So you can feel them the way I do. <br>
I want to give you joy. <br>
You bring me joy. </p>
`;
} else if (documentTitle === 'cyanide') {
        content = `
<p>Cyanide. <br>
A word of embers. <br>
Deep reds and oranges <br>
Against charcoal black. <br>
It doesn’t taste like you’d expect, <br>
Metallic and sharp. <br>
Cyanide is warm, <br>
Like cinnamon and cider. <br>
It feels hot to the touch, <br>
But not hot enough to burn. <br>
Its texture is smooth but fragile, <br>
Of glass <br>
Like the wood of a burnt out campfire. <br>
It leaves auburn powder on your hands. <br>
Cyanide can kill, <br>
But I don’t feel like it has the intention to. </p>
`;       
} else {
        content = `<p>Content for ${documentTitle} is not available yet.</p>`;
    }

    documentContent.innerHTML = content;
    documentViewer.style.display = 'block';
}


        function closeDocumentViewer() {
            document.getElementById('documentViewer').style.display = 'none';
        }