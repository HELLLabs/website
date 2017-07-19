
    var created = 0;

        function newDropdown2() {

            if (created == 1) {
                removeDrop();
            }

            var main = document.getElementById('mainMenu');
            
            
            var main2 = document.getElementById('myDiv');
            var newDropdown = document.createElement('select');

            newDropdown.setAttribute('id',"newDropdownMenu");
            main2.appendChild(newDropdown);

            

            if (main.value == "Block-A") { 

                
                var aRoom1=document.createElement("option");
                aRoom1.text="Room No 250";
                newDropdown.add(aRoom1,newDropdown.options[0]);

                
                var aRoom2=document.createElement("option");
                aRoom2.text="Room No 251";
                newDropdown.add(aRoom2,newDropdown.options[1]);

                var aRoom3=document.createElement("option");
                aRoom3.text="Room No 252";
                newDropdown.add(aRoom3,newDropdown.options[2]);

                var aRoom4=document.createElement("option");
                aRoom4.text="Room No 253";
                newDropdown.add(aRoom4,newDropdown.options[3]);

            } else if (main.value == "Block-B") { 

                
                var bRoom1=document.createElement("option");
                bRoom1.text="Room no 151";
                newDropdown.add(bRoom1,newDropdown.options[0]);

                
                var bRoom2=document.createElement("option");
                bRoom2.text="Room no 152";
                newDropdown.add(bRoom2,newDropdown.options[1]);

                var bRoom3=document.createElement("option");
                bRoom3.text="Room no 153";
                newDropdown.add(bRoom3,newDropdown.options[2]);

                var bRoom4=document.createElement("option");
                bRoom4.text="Room no 154";
                newDropdown.add(bRoom4,newDropdown.options[3]);

            }else if (main.value == "Block-C") { 

                
                var cRoom1=document.createElement("option");
                cRoom1.text="Room no 65";
                newDropdown.add(cRoom1,newDropdown.options[null]);

                
                var cRoom2=document.createElement("option");
                cRoom2.text="Room no 66";
                newDropdown.add(cRoom2,newDropdown.options[null]);

                var cRoom3=document.createElement("option");
                cRoom3.text="Room no 67";
                newDropdown.add(cRoom3,newDropdown.options[null]);

                var cRoom4=document.createElement("option");
                cRoom4.text="Room no 68";
                newDropdown.add(cRoom4,newDropdown.options[null]);

            }else if (main.value == "Block-D") { 

                
                var dRoom1=document.createElement("option");
                dRoom1.text="Room no 202";
                newDropdown.add(dRoom1,newDropdown.options[null]);

                var dRoom2=document.createElement("option");
                dRoom2.text="Room no 203";
                newDropdown.add(dRoom2,newDropdown.options[null]);

                var dRoom3=document.createElement("option");
                dRoom3.text="Room no 204";
                newDropdown.add(dRoom3,newDropdown.options[null]);

                
                var dRoom4=document.createElement("option");
                dRoom4.text="Room no 205";
                newDropdown.add(dRoom4,newDropdown.options[null]);

            }

            created = 1

        }

        function removeDrop() {
            var d = document.getElementById('myDiv');

            var oldmenu = document.getElementById('newDropdownMenu');

            d.removeChild(oldmenu);
        }

        
