document.addEventListener("DOMContentLoaded", function() {
    var calender = document.getElementById('kalender');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // Januar ist 0
    var yyyy = today.getFullYear();

    // Aktuelles Datum in gewünschtem Format in die Konsole ausgeben
    today = String(dd).padStart(2, '0') + '/' + String(mm).padStart(2, '0') + '/' + yyyy;
   
    // Create an array with numbers from 1 to 24
    var doors = Array.from({ length: 24 }, (_, i) => i + 1);

    // Shuffle the array
    doors = doors.sort(() => Math.random() - 0.5);

    var gift = [
        'Ich liebe dich, den du bist für mich mein einiziges Licht, darauf das unsere Liebe niemals bricht.',
        'Gutschein: Eine Dönerpizza mit mir',
        'Deine Schönheit erstaunt mich Tag für Tag, und egal was ich sag, du bist das was ich am meisten in meinem Leben mag.',
        'Gutschein: Wenn du bei mir bist ein Tag nicht angefurzt werden',
        'Dein Lächeln lässt mein Herz erwärm, ich wünschte du wärst nicht so fern, du lässt mich Dinge fühlen ich kanns mir nicht erklären.',
        'Gutschein: Für eine unbegrenzte Back Massage',
        'Ich fühle es in mir, du bist die Richtige für immer jetzt und hier, mit dir hab ich Spaß am Leben als wär ich wieder vier.',
        'Gutschein: Ein League Skin deiner Wahl',
        'Das Leben ist schön und toll mit dir an meiner Seite, das Leben ist unterhaltsam jeden Tag was neues mit dir an meiner Seite, das Leben fühlt sich richtig an mit dir an meiner Seite.',
        'Gutschein: Ein Strauß Blumen für dich',
        'Zu wissen dass ich dich habe ist wie zu wissen ich wäre reich, zu wissen dass ich dich habe ist zu wissen ich hab die Richtige, zu wissen das ich dich habe ist das Glück meines Lebens.',
        'Gutschein: Shoppen gehen ohne das ich meckere oder genervt bin',
        'Jeden Tag verlieb ich mich in dich erneut, und an keinem Tag hab ichs bisher bereut, und so lieb ich dich wie am ersten Tag noch heut.',
        'Gutschein: Ein Tag in einem Freizeitpark deiner Wahl',
        'Ich kanns nicht anderst sagen, mein Traum ist es dich zum Altar zu tragen, und den Versuch von mindestens 2 Katzen mit dir zu wagen.',
        'Gutschein: Ich koche/backe mit dir was du möchtest',
        'Nichts auf der Welt könnte mich glücklicher machen, egal mit was für Sachen, den nichts is soviel Wert wie dein Lachen.',
        'Gutschein: Ein Wellness Tag',
        'Mit dir durch gute und schlechte Zeiten zu gehen, diese Zukunft kann ich für uns sehen, ich kann es nicht erwarten mit dir im Leben zu stehen.',
        'Gutschein: Eine Ganzkörpermassage',
        'Ich möcht in deinen Armen liegen, dir in die Augen schauen und mich neu verlieben, mit dir auf Wolke 7 fliegen.', 
        'Gutschein: Steam Spiel deiner Wahl oder League Kapseln (beides im Wert von 50€)',
        'Ich bin stolz auf dich, du verlierst nie die Übersicht, mit dir kann ich sein wue ich bin dafür liebe ich dich.',
        'Gutschein: Freier Gutschein (du darfst bestimmen für was dieser Gutschein eingelöst werden soll)']

    // 24 Türen erstellen und markieren, ob sie "heute" geöffnet werden können
    doors.forEach((day) => {
        var div = document.createElement("div");
        div.classList.add('door');
        div.id = 'door-' + day;
        div.innerHTML = "Türchen " + day;
        div.onclick = function() {openPresent(day)}; 

        // Überprüfen, ob der Tag der aktuellen Tür mit dem heutigen Tag übereinstimmt
        if ((day <= dd && mm === 12) || yyyy > 2024) {
            div.classList.add('opened'); // Frühere Türen als "geöffnet" markieren
        } else {
            div.classList.add('locked'); // Zukünftige Türen als "gesperrt" markieren
        }

        calender.appendChild(div);
    })

    function openPresent(day) {
        var giftText = gift[day -1] 
        var modalBackground = document.getElementById('background')
        var giftModal = document.getElementById('modal')
        var getDoorId = document.getElementById('door-' + day)
        
        if (getDoorId.classList.contains('opened')) {
            modalBackground.style.display = 'block'
            giftModal.style.display = 'block'
            giftModal.innerHTML = giftText
        }

        modalBackground.addEventListener('click', () => {
            modalBackground.style.display = 'none'
            giftModal.style.display = 'none'
        })
    }
});


