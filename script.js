function prompt_gen(genre) {
   let character_1 = document.getElementById('character-1').value;
   let character_2 = document.getElementById('character-2').value;

   // randomizing prompt
   switch (genre) {
      case 0:
         var prompt = romancePrompts[Math.floor(Math.random() * romancePrompts.length)];
         break;
      case 1:
         var prompt = fantasyPrompts[Math.floor(Math.random() * fantasyPrompts.length)];
         break;
      case 2:
         var prompt = horrorPrompts[Math.floor(Math.random() * horrorPrompts.length)];
         break;
      case 3:
         var prompt = mysteryPrompts[Math.floor(Math.random() * mysteryPrompts.length)];
         break;
   }

   // randomizing the order of the names in the prompts
   let num = Math.floor(Math.random()*2);

   if (document.getElementById('character-1').value != '') {
      if (num == 0) {
         prompt = prompt.replace("Character A", `<b>${character_1}</b>`);
      } else {
         prompt = prompt.replace("Character A", `<b>${character_2}</b>`);
      }
   } else {
      prompt = prompt.replace("Character A", `<b>Character A</b>`);
   }

   if (document.getElementById('character-2').value != '') {
      if (num == 0) {
         prompt = prompt.replace("Character B", `<b>${character_2}</b>`);
      } else {
         prompt = prompt.replace("Character B", `<b>${character_1}</b>`);
      }
   } else {
      prompt = prompt.replace("Character B", `<b>Character B</b>`);
   }

   document.getElementById("prompt-box").innerHTML = prompt;
}

// incomplete arrays to be filled with prompts
// the long paragraph in the mysteryPrompts array is to test the custom scrollbar
let romancePrompts = ["Character A and Character B do romance thing",
                  "Character A romances up Character B",
                  ];

let fantasyPrompts = ["Character A does fantasy to Character B",
               "Character A whacks fantasy in Character B's face"
               ];

let horrorPrompts = ["Character A jumpscares Character B with horror",
               "Character A and Character B are in horror together"
               ];

let mysteryPrompts = ["Character A uncovers the mystery of Character B",
               "Character A and Character B do mystery",
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et diam euismod, interdum mi ac, lobortis ligula. Donec maximus a urna nec tincidunt. Praesent nec efficitur metus. Vestibulum nec tristique leo, non accumsan nunc. Curabitur ut pretium lectus. Aliquam vitae ligula libero. Vestibulum vestibulum suscipit tellus, at porta tellus aliquet non. Suspendisse semper felis faucibus feugiat viverra. Nulla molestie mollis mauris a pellentesque. Maecenas vehicula metus vehicula lobortis venenatis. Praesent commodo risus quis lectus pretium auctor. Suspendisse tristique lacus convallis egestas blandit. Vestibulum nec posuere arcu. In rhoncus vulputate urna, sit amet posuere ante ullamcorper vitae. Donec ultricies libero a enim viverra blandit. Praesent ac sem est. Nulla quis nisl felis. Suspendisse et interdum leo. Cras eu arcu sit amet nulla feugiat commodo vel sed velit. Donec non dui nibh. Donec eget consequat purus. Ut dictum est non augue egestas, nec varius arcu sollicitudin. Nulla id fel"
            ];