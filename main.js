document.getElementById('toggleTheme').addEventListener('click', function() {
    alert('Now entering the Austin Dimension. Click the brain icon to return to this page.');
});

const fileExplorer = document.getElementById('fileExplorer');
const friends = document.getElementById('friends'); 
const gallery= document.getElementById('gallery'); 
const photos = document.getElementById('photos'); 
const image = document.getElementById('image');
const read = document.getElementById('read');
let check; 
let isOriginal = true;

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

        let readcontent = '<p><b>Welcome!</b></p> <p>    The Austin Dimension is what I call my "mind palace". I always like to think of my brain as a computer, so I thought it would be a cool metaphor to make my creative portfolio a visual representation of what I envision the Austin Operating System™ would look like. This site exists as the whimsical counterpart to my professional portfolio, which can be accessed by clicking the brain icon in the bottom left corner of the screen. This is my first website, but I plan to update it as my web development skills improve. Enjoy your stay! :) </p><p><b><u>Current Projects:</u></b><br> <b>(DONE) Documents:</b> poetry(?) from highschool and also recently. may be updated again eventually <br> <b>(WIP) Friends:</b> cameos of those closest to me <br> <b>(WIP) Gallery:</b> anything that is traditional/digital one-off art <br> <b>(WIP) Photos:</b> pictures I took or I think are funny <br> <b>(DONE) Switch Look:</b> just click the button, trust. will add more when i draw more <br> <b>(SOON) Projects:</b> collections of related pieces/concept art <br> <b>(SOON) Translator:</b> ever wanted to know what color your name canonically is in my brain? :) <br> <b>(SOON) *creative spotify ripoff name*:</b> shameless playlist plug and the timeline of my life in music <br> <b>(SOON) Socials:</b> going to put these in taskbar but its probably just going to be discord (mister.blu) and github (misterbluuu) unless Meta fixes its hate speech policy 💀';


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
    documentContent.innerHTML = content;
    documentViewer.style.display = 'block';
}


        function closeDocumentViewer() {
            document.getElementById('documentViewer').style.display = 'none';
        }
