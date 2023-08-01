function signupStudint() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var firstName = document.getElementById("firstName").value;
    var ifFirstValid = isvalid(firstName, 3);
    if (ifFirstValid == false) {
        document.getElementById("firstNameError").innerHTML = "check your first name!";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }
    var lastName = document.getElementById("lastName").value;
    var ifLastValid = isvalid(lastName, 6);
    if (ifLastValid == false) {
        document.getElementById("lastNameError").innerHTML = "check your last name!";
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }
    var email = document.getElementById("email").value;

    var isEmailValid = isEmail(usersTab, email);
    if (isEmailValid == false) {
        document.getElementById("emailError").innerHTML = "Email already existed!"
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    var telephone = document.getElementById("tel").value;
    var isTelValid = isTel(telephone, 8);
    if (isTelValid == false) {
        document.getElementById("telephoneError").innerHTML = "your telephone number should have 8 numbers!"
    } else {
        document.getElementById("telephoneError").innerHTML = "";
    }
    var password = document.getElementById("password").value;

    var isPassValid = isvalid(password, 8);
    if (isPassValid == false) {
        document.getElementById("passwordError").innerText = "your password should have 8 lettres!";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
    var CIN = document.getElementById("CIN").value;
    var isCINValid = isTel(telephone, 8);
    if (isCINValid == false) {
        document.getElementById("CINError").innerHTML = "your telephone number should have 8 numbers!"
    } else {
        document.getElementById("CINError").innerHTML = "";
    }
    var Address = document.getElementById("Address").value;
    var City = document.getElementById("City").value;

    if (ifFirstValid) {
        // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");  //parse: convertir une chaine de caractère à un objet 


        //Création d'un objet JSON
        var user = {
            id: maxId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            telephone: telephone,
            password: password,
            CIN:CIN,
            Address:Address,
            City:City,
            role:"Studint",
        }
        console.log(user);

        // sauvegarde dans le LS
        usersTab.push(user); //push: insertion d'un nouveau user dans un  tab 
        localStorage.setItem("users", JSON.stringify(usersTab)); //stringify aakes parse objet-> chaine de caractère
        //localStorage.setItem : enregistrement dans la BD 
        //console.log(user);
        //users: key , usersTab: value
    }
}
    function isvalid(ch, x) {
        if (ch.length < x) {
            return false;
        }
        return true;
    }
    function isEmail(t, email) {
        var email = document.getElementById("email").value;
        var test = false;
        for (var i = 0; i < t.length; i++) {
            if (t[i].email == email) {
                return test;
            }
    
        }
    }
    function isTel(r, v) {
        return (r.length == v);
    }
    function maxId(t) {
        var max;
        if (t.length == 0) {
            max = 0;
        }
        else {
            max = t[0].id;
            for (var i = 1; i < t.length; i++) {
                if (t[i].id > max) {
                    max = t[i].id;
                }
    
            }
        }
        return (max);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function signupProfessor() {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        var firstName = document.getElementById("firstName").value;
        var ifFirstValid = isvalid(firstName, 3);
        if (ifFirstValid == false) {
            document.getElementById("firstNameError").innerHTML = "check your first name!";
        } else {
            document.getElementById("firstNameError").innerHTML = "";
        }
        var lastName = document.getElementById("lastName").value;
        var ifLastValid = isvalid(lastName, 6);
        if (ifLastValid == false) {
            document.getElementById("lastNameError").innerHTML = "check your last name!";
        } else {
            document.getElementById("lastNameError").innerHTML = "";
        }
        var email = document.getElementById("email").value;
    
        var isEmailValid = isEmail(usersTab, email);
        if (isEmailValid == false) {
            document.getElementById("emailError").innerHTML = "Email already existed!"
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
        var telephone = document.getElementById("tel").value;
        var isTelValid = isTel(telephone, 8);
        if (isTelValid == false) {
            document.getElementById("telephoneError").innerHTML = "your telephone number should have 8 numbers!"
        } else {
            document.getElementById("telephoneError").innerHTML = "";
        }
        var password = document.getElementById("password").value;
    
        var isPassValid = isvalid(password, 8);
        if (isPassValid == false) {
            document.getElementById("passwordError").innerText = "your password should have 8 lettres!";
        } else {
            document.getElementById("passwordError").innerHTML = "";
        }
        var Address = document.getElementById("Address").value;
        var Mat = document.getElementById("Mat").value;
    
        if (ifFirstValid) {

            var user = {
                id: maxId(usersTab) + 1,
                firstName: firstName,
                lastName: lastName,
                email: email,
                telephone: telephone,
                password: password,
                Address:Address,
                MAT:Mat,
                role:"Professor",
            }
            console.log(user);
    
 
            usersTab.push(user);  
            localStorage.setItem("users", JSON.stringify(usersTab)); 

        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function signupAdmin() {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        var firstName = document.getElementById("firstName").value;
        var ifFirstValid = isvalid(firstName, 3);
        if (ifFirstValid == false) {
            document.getElementById("firstNameError").innerHTML = "check your first name!";
        } else {
            document.getElementById("firstNameError").innerHTML = "";
        }
        var lastName = document.getElementById("lastName").value;
        var ifLastValid = isvalid(lastName, 6);
        if (ifLastValid == false) {
            document.getElementById("lastNameError").innerHTML = "check your last name!";
        } else {
            document.getElementById("lastNameError").innerHTML = "";
        }
        var email = document.getElementById("email").value;
    
        var isEmailValid = isEmail(usersTab, email);
        if (isEmailValid == false) {
            document.getElementById("emailError").innerHTML = "Email already existed!"
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
        var password = document.getElementById("password").value;
    
        var isPassValid = isvalid(password, 8);
        if (isPassValid == false) {
            document.getElementById("passwordError").innerText = "your password should have 8 lettres!";
        } else {
            document.getElementById("passwordError").innerHTML = "";
        }
    
        if (ifFirstValid) {
 
    
    

            var user = {
                id: maxId(usersTab) + 1,
                firstName: firstName,
                lastName: lastName,
                email: email,       
                password: password,
                role:"Admine",
            }
            console.log(user);
    
  
            usersTab.push(user);
            localStorage.setItem("users", JSON.stringify(usersTab)); 

        }
    }   
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function login() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var findedUser = checkUser(usersTab, email, password);

    if (findedUser) {
        localStorage.setItem("connected", findedUser.id);
        if (findedUser.role=="Studint") {
            location.replace("studintUser.html");
            
        }else if(findedUser.role=="Professor"){
            location.replace("ProfessorUser.html");
        }else{
            location.replace("admin.html");
        }

    } else {
        document.getElementById("loginError").innerHTML = "Verify your Password";
    }

    localStorage.setItem("connected", JSON.stringify(findedUser.id));
}
function checkUser(Tab, user, pass) {
    var findedUser;
    for (var i = 0; i < Tab.length; i++) {
        if ((Tab[i].email == user) && (Tab[i].password == pass)) {
            findedUser = Tab[i];
            break;
        }
    }
    return findedUser;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////PROFESSOR/////////////////////////////////////////////////////////////////////
function ajouterFormation() {
    var connectedUserId = localStorage.getItem("connected");
    var connectedPr=searchObj(connectedUserId,"users").firstName;
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var Name = document.getElementById("Name").value;
    var Price= document.getElementById("Price").value;
    var nbrHours= document.getElementById("nbrHours").value;
    var nbrPlace= document.getElementById("nbrPlace").value;
    var ajouter = {
        id: maxId(ajouterFTab) + 1,
        Name:Name,
        Price:Price,
        nbrHours:nbrHours,
        nbrPlace:nbrPlace,
        userId:connectedUserId,
        NameProfessor:connectedPr,
    }
    console.log(ajouter);

    // sauvegarde dans le LS
    ajouterFTab.push(ajouter); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("Formation", JSON.stringify(ajouterFTab));
   
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////suprimer un formation /////////////////////////////////////////////////////
function displayFormation() {
    var connectedUserId = localStorage.getItem("connected");
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var Formations = [];
    var content = "";

    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].userId == connectedUserId) {
            Formations.push(ajouterFTab[i]);
        }
    }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <tr> 
        <td>${Formations[i].id}</td>
        <td>${Formations[i].Name}</td>
        <td>${Formations[i].Price}$</td>
        <td>${Formations[i].nbrHours}</td>
        <td>${Formations[i].nbrPlace}</td>
        <td> <button class="btn btn-primary me-md-2" onclick="updateProfessor(${Formations[i].id})" type="button">UPDATE</button></td>
        <td> <button class="btn btn-primary1 me-md-2" onclick="deleteFormation(${Formations[i].id})" type="button">DELETE</button></td>
        <td> <button class="btn btn-primary1 me-md-2" onclick="addTest(${Formations[i].id})" type="button">Add Test</button></td>
      </tr>
      `

    }
    document.getElementById("tableMonFormationProfessorUser").innerHTML = content;
    }
    /////////////////////////////////////////modif & suprimer : formation prof /////////////////////////////////////////////////////////////
    function updateProfessor(id) {
        var content = "";
        var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
        
        for (var i = 0; i < ajouterFTab.length; i++) {

            if (ajouterFTab[i].id == id) {
                content = content + `
                
                <div class="form" style="width:30cm ;">
                <div class="row">
                <div class="col-3">
                </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input id="newName" type="text" class="form-control bg-light border-0" placeholder="Name"  value=${ajouterFTab[i].Name} style="padding: 30px 20px;">
                        </div>
                        <span id="NameError"></span>
                    
                    
                        <div class="form-group">
                            <input id="newPrice" type="text" class="form-control bg-light border-0" placeholder="Price" value=${ajouterFTab[i].Price}  style="padding: 30px 20px;">
                        </div>
                        <span id="PriceError"></span>
                    
                    
                        <div class="form-group">
                            <input id="newnbrHours" type="text" class="form-control bg-light border-0" placeholder="nbrHours" value=${ajouterFTab[i].nbrHours}  style="padding: 30px 20px;">
                        </div>
                        <span id="nbrHoursError"></span>
                    
                    
                    
                        <div class="form-group">
                            <input id="newnbrPlace" type="text" class="form-control bg-light border-0" placeholder="nbrPlace"  value=${ajouterFTab[i].nbrPlace}  style="padding: 30px 20px;">
                        </div>
                        <span id="nbrPlaceError"></span>
                    
                <div class="form-group">
                    <div class="col-sm-6" >
                        <button onclick="upDate(${ajouterFTab[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;margin-left: 60%;">Modifier</button>
                    </div>
                </div>
                </div>
                <div class="col-3">
                </div>

                `
                break;
            }
        }
        document.getElementById("modifierformation").innerHTML = content;
    }
    //////////////////////////////////////botoun modif////////////////////////////////////////////
    function upDate(id) {
        var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
         var Name = document.getElementById("newName").value;
         var Price = document.getElementById("newPrice").value;
         var nbrHours = document.getElementById("newnbrHours").value;
         var nbrPlace = document.getElementById("newnbrPlace").value;
     
         for (var i = 0; i <ajouterFTab.length; i++) {
     
             if (ajouterFTab[i].id == id) {
                ajouterFTab[i].Name=Name;    
                ajouterFTab[i].Price=Price;    
                ajouterFTab[i].nbrHours=nbrHours;   
                ajouterFTab[i].nbrPlace=nbrPlace;   
                localStorage.setItem("Formation", JSON.stringify((ajouterFTab))); 
                location.reload();
             }
             
         }
         
     }
     ////////////////////////////////bouton suprime////////////////////////////////////////////////////////////
    function deleteFormation(id) {
        var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
        for (var i = 0; i < ajouterFTab.length; i++) {
            if (ajouterFTab[i].id == id) {
                ajouterFTab.splice(i, 1);
            }
        }
        localStorage.setItem("Formation", JSON.stringify(ajouterFTab));
        location.reload();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////formation studint math////////////////////////////////////////////////////
    function displayFormationStudintMath() {
        var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
        var Formations = [];
        var content = "";
        for (var i = 0; i < ajouterFTab.length; i++) {
            if (searchObj(ajouterFTab[i].userId, "users").MAT=="math") {
                Formations.push(ajouterFTab[i]);
            }
        }
        for (var i = 0; i < Formations.length; i++) {

            content = content + `
            <tr> 
            <td>${i+1}</td>
            <td>${Formations[i].NameProfessor}</td>
            <td>${Formations[i].Name}</td>
            <td>${Formations[i].nbrHours}</td>
            <td>${Formations[i].nbrPlace}</td>
            <td>${Formations[i].Price} $</td>
            <td><button onclick="addFormationStudint(${Formations[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;">add</button></td>
          </tr>
          `
    
        }
        document.getElementById("tableMonFormationStudintUser").innerHTML = content;
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////formation studint phy////////////////////////////////////////
        function displayFormationStudintPhy() {
            var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
            var Formations = [];
            var content = "";
        
            for (var i = 0; i < ajouterFTab.length; i++) {
                if (searchObj(ajouterFTab[i].userId, "users").MAT=="phy") {
                    Formations.push(ajouterFTab[i]);
                }
            }
            for (var i = 0; i < Formations.length; i++) {
                content = content + `
                <tr> 
                <td>${i+1}</td>
                <td>${Formations[i].NameProfessor}</td>
                <td>${Formations[i].Name}</td>
                <td>${Formations[i].nbrHours}</td>
                <td>${Formations[i].nbrPlace}</td>
                <td>${Formations[i].Price} $</td>
                <td><button onclick="addFormationStudint(${Formations[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;">add</button></td>
              </tr>
              `
        
            }
            document.getElementById("tableMonFormationStudintUser").innerHTML = content;
            }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////formation studint info//////////////////////////////////////////////////////////////////
function displayFormationStudintInfo() {

    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var Formations = [];
    var content = "";

    for (var i = 0; i < ajouterFTab.length; i++) {
        if (searchObj(ajouterFTab[i].userId, "users").MAT=="info") {
            Formations.push(ajouterFTab[i]);
        }
    }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <tr> 
        <td>${i+1}</td>
        <td>${Formations[i].NameProfessor}</td>
        <td>${Formations[i].Name}</td>
        <td>${Formations[i].nbrHours}</td>
        <td>${Formations[i].nbrPlace}</td>
        <td>${Formations[i].Price} $</td>
        <td><button onclick="addFormationStudint(${Formations[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;">add</button></td>
      </tr>
      `

    }
    document.getElementById("tableMonFormationStudintUser").innerHTML = content;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////chercher un objet //////////////////////////////////////////////////////

        function searchObj(id, key) {

            var T = JSON.parse(localStorage.getItem(key) || "[]");
            var finded;
            for (let i = 0; i < T.length; i++) {
                if (T[i].id == id) {
                    finded = T[i];
                    break;
                }
        
            }
            return (finded);
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////inscrit une formaton ///////////////////////////////////////////////////////////////
function addFormationStudint(id) {
    var content = "";
    var connectedUserId = localStorage.getItem("connected");
    var connectedStF=searchObj(connectedUserId,"users").firstName;
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");

    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
            content = content + `
            
            <div class="container">
            <div class="card px-4">
                <p class="h2 py-2  text-uppercase text-primary" >Payment Details</p>
                <div class="row gx-3">
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Person Name</p>
                            <input class="form-control mb-3" type="text" placeholder="Name" value="${connectedStF}">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn btn-primary mb-3" >
                            <span onclick="FormationInscrit(${ajouterFTab[i].id})" class="ps-3">pay $${ajouterFTab[i].Price}</span>
                            <span class="fas fa-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            `
            break;
        }
    }
    document.getElementById("paimentStudint").innerHTML = content;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////objet formation inscrit//////////////////////////////////////////////////////////

function FormationInscrit(id) {
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var connectedUserId = localStorage.getItem("connected");
    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
    var formationId=searchObj(ajouterFTab[i].id,"Formation").id;
    var userIdPr=searchObj(ajouterFTab[i].id,"Formation").userId;
    var FormationInscritTab = JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
    var Inscrit = {
        id: maxId(FormationInscritTab) + 1,
        userId:connectedUserId,
        userIdPr:userIdPr,
        formationId:formationId,

    }
}
    }
    

    console.log(Inscrit);

    // sauvegarde dans le LS
    FormationInscritTab.push(Inscrit); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("FormationInscrit", JSON.stringify(FormationInscritTab));
        }



///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function displayMonFormationSt() {
    var connectedUserId = localStorage.getItem("connected");
    var FormationInscritTab= JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
    var Formations = [];
    var content = "";
    for (var i = 0; i < FormationInscritTab.length; i++) {
        if (FormationInscritTab[i].userId == connectedUserId) {
          Formations.push (FormationInscritTab[i]);
        }
      }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <tr> 
        <td>${searchObj(Formations[i].formationId,"Formation").id}</td>
        <td>${searchObj(Formations[i].formationId,"Formation").Name}</td>
        <td>${searchObj(Formations[i].formationId,"Formation").NameProfessor}</td>
        <td>${searchObj(Formations[i].formationId,"Formation").nbrPlace}</td>
        <td>${searchObj(Formations[i].formationId,"Formation").nbrHours}</td>
        <td>${searchObj(Formations[i].formationId,"Formation").Price}$</td>
        <td> <button class="btn btn-primary1 me-md-2" onclick="deleteFormationStudintInscrit(${Formations[i].id})" type="button">DELETE</button></td>
        <td> <button class="btn btn-primary2 me-md-2" onclick="addResponse(${searchObj(Formations[i].formationId,"Formation").id})" type="button">Reponse Test</button></td>
      </tr>
      `

    }

    document.getElementById("tableMonFormationStudintUser").innerHTML = content;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////bouton supprimer un formation inscrit de studint /////////////////////////
    function deleteFormationStudintInscrit(id) {
        var FormationInscritTab = JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
        for (var i = 0; i < FormationInscritTab.length; i++) {
            if (FormationInscritTab[i].id == id) {
                FormationInscritTab.splice(i, 1);
            }
        }
        localStorage.setItem("FormationInscrit", JSON.stringify(FormationInscritTab));
        location.reload();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////les etudiont qui inscrit affiche pou le prof//////////////////////////////////////////////////
    function displayMonEtudiontPr() {
        var connectedUserId = localStorage.getItem("connected");
        var FormationInscritTab= JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
        var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
        var Formations1 = [];
        var Formations2 = [];
        var content = "";
        for (var i = 0; i <ajouterFTab.length; i++) {
            if (ajouterFTab[i].userId == connectedUserId) {
                Formations1.push(ajouterFTab[i]);
            }
        }
        for (var j = 0; j <Formations1.length; j++) {
        for (var k = 0; k < FormationInscritTab.length; k++) {
            if (FormationInscritTab[k].formationId == Formations1[j].id) {
                Formations2.push(FormationInscritTab[k]);
            }
        }
    }
        for (var i = 0; i < Formations2.length; i++) {
            content = content + `
            <tr> 
            <td>${Formations2[i].id}</td>
            <td>${searchObj(Formations2[i].formationId,"Formation").Name}</td>
            <td>${searchObj(Formations2[i].userId,"users").firstName}${searchObj(Formations2[i].userId,"users").lastName}</td>
            <td>${searchObj(Formations2[i].formationId,"Formation").nbrPlace}</td>
            <td>${searchObj(Formations2[i].formationId,"Formation").nbrHours}</td>
            <td>${searchObj(Formations2[i].formationId,"Formation").Price}$</td>
            <td> <button class="btn btn-primary1 me-md-2" onclick="deleteFormationStudintInscrit(${Formations2[i].id})" type="button">DELETE</button></td>
            <td> <button class="btn btn-primary1 me-md-2" onclick="NotesPr(${searchObj(Formations2[i].formationId,"Formation").id})" type="button">Notes</button></td>
          </tr>
          `
    
        }
        document.getElementById("tableMonEtudiontProfessorUser").innerHTML = content;
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////afficher les User studint pour le admin//////////////////////////////////////////////////////
        function displayStudintAdmin() {
            var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
            var Formations = [];
            var content = "";
        
            for (var i = 0; i < usersTab.length; i++) {
                if (usersTab[i].role=="Studint") {
                    Formations.push(usersTab[i]);
                }
            }
            for (var i = 0; i < Formations.length; i++) {
                content = content + `
                <tr> 
                <td>${i+1}</td>
                <td>${Formations[i].firstName}</td>
                <td>${Formations[i].lastName}</td>
                <td>${Formations[i].email}</td>
                <td>${Formations[i].telephone}</td>
                <td>${Formations[i].password}</td>
                <td>${Formations[i].Address}</td>
                <td>${Formations[i].CIN}</td>
                <td>${Formations[i].City}</td>
                <td> <button class="btn btn-primary me-md-2" onclick="updateStusintAdmin(${Formations[i].id})" type="button">UPDATE</button></td>
        <td> <button class="btn btn-primary1 me-md-2" onclick="deleteUserAdmin(${Formations[i].id})" type="button">DELETE</button></td>
                
              </tr>
              `
        
            }
            document.getElementById("tableStudintAdmin").innerHTML = content;
            }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////affichage update studint//////////////////////////////////////////////////////////////
            function updateStusintAdmin(id) {
                var content = "";
                var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
            
                for (var i = 0; i < usersTab.length; i++) {
                    if (usersTab[i].id == id) {
                        content = content + `
                        
                        <div class="col-lg-6 py-5">
                        <div class="bg-white p-5 my-5">
                                <div class="form" style="width:30cm ;">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newfirstName" type="text" class="form-control bg-light border-0" placeholder="firstName" value=${usersTab[i].firstName} style="padding: 30px 20px;">
                                        </div>
                                        <span id="firstNameError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newlastName" type="text" class="form-control bg-light border-0" placeholder="lastName" value=${usersTab[i].lastName} style="padding: 30px 20px;">
                                        </div>
                                        <span id="lastNameError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newemail" type="email" class="form-control bg-light border-0" placeholder="Email" value=${usersTab[i].email} style="padding: 30px 20px;">
                                        </div>
                                        <span id="emailError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newpassword" type="password" class="form-control bg-light border-0" placeholder="password" value=${usersTab[i].password} style="padding: 30px 20px;">
                                        </div>
                                        <span id="passwordError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newtel" type="tel" class="form-control bg-light border-0" placeholder="telephone" value=${usersTab[i].telephone} style="padding: 30px 20px;">
                                        </div>
                                        <span id="telephoneError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newCIN" type="text" class="form-control bg-light border-0" placeholder="CIN" value=${usersTab[i].CIN} style="padding: 30px 20px;">
                                        </div>
                                        <span id="CINError"></span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="newAddress" type="text" class="form-control bg-light border-0" placeholder="Address" value=${usersTab[i].Address} style="padding: 30px 20px;">
                                        </div>
                                        <span id="AddressError"></span>
                                    </div>
                                </div>
                                <div class="form">
                                    <div class="col-sm-6">
                                        <div class="form-group" style="width:14cm ;" >
                                            <select id="newCity" class="custom-select bg-light border-0 px-3" value=${usersTab[i].City} style="height: 60px; margin-left:1% ;">
                                                <option selected>Select your City</option>
                                                    <option value="Tunisie">Tunisie</option>
                                                    <option value="Ariana">Ariana</option>
                                                    <option value="Béja">Béja</option>
                                                    <option value="Bizerte">Bizerte</option>
                                                    <option value="Ben Arous">Ben Arous</option>
                                                    <option value="Tataouine">Tataouine</option>
                                                    <option value="Tozeur">Tozeur</option>
                                                    <option value="Jendouba">Jendouba</option>
                                                    <option value="Zaghouan">Zaghouan</option>
                                                    <option value="Siliana">Siliana</option>
                                                    <option value="Sousse">Sousse</option>
                                                    <option value="Sidi Bouzid">Sidi Bouzid</option>
                                                    <option value="Sfax">Sfax</option>
                                                    <option value="kbeli">kbeli</option>
                                                    <option value="gabes">gabes</option>
                                                    <option value="Kasserine">Kasserine</option>
                                                    <option value="Gafsa">Gafsa</option>
                                                    <option value="Kairouan">Kairouan</option>
                                                    <option value="Kef">Kef</option>
                                                    <option value="Médenine">Médenine</option>
                                                    <option value="Monastir">Monastir</option>
                                                    <option value="Manouba">Manouba</option>
                                                    <option value="Mahdia">Mahdia</option>
                                                    <option value="Nabeul">Nabeul</option>
                                                    
                                        
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6" >
                                        <button onclick="upDateAdmineSt(${usersTab[i].id})" class="btn btn-primary btn-block"  style="height: 60px;margin-left: 60%;">modifier</button>
                                    </div>
                                </div>
                            
            
                        </div>
                    </div>
        
                        `
                        break;
                    }
                }
                document.getElementById("UpdateStudintAdmine").innerHTML = content;
            }
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////bouton update Admin St//////////////////////////////////////////////////////////////////////
        function upDateAdmineSt(id) {
            var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
             var firstName = document.getElementById("newfirstName").value;
             var lastName = document.getElementById("newlastName").value;
             var email = document.getElementById("newemail").value;
             var telephone = document.getElementById("newtel").value;
             var password = document.getElementById("newpassword").value;
             var Address = document.getElementById("newAddress").value;
             var CIN = document.getElementById("newCIN").value;
             var City = document.getElementById("newCity").value;
         
             for (var i = 0; i <usersTab.length; i++) {
         
                 if (usersTab[i].id == id) {
                    usersTab[i].firstName=firstName;    
                    usersTab[i].lastName=lastName;    
                    usersTab[i].email=email;    
                    usersTab[i].telephone=telephone;    
                    usersTab[i].password=password;    
                    usersTab[i].Address=Address;    
                    usersTab[i].CIN=CIN;    
                    usersTab[i].City=City;    
                    localStorage.setItem("users", JSON.stringify((usersTab))); 
                    location.reload();
                 }
                 
             
            }   
         }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////afficher les user Professor pour le admin/////////////////////////////////////////////////////////////////////
function displayProfessorAdmin() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var Formations = [];
    var content = "";

    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role=="Professor") {
            Formations.push(usersTab[i]);
        }
    }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <tr> 
        <td>${i+1}</td>
        <td>${Formations[i].firstName}</td>
        <td>${Formations[i].lastName}</td>
        <td>${Formations[i].email}</td>
        <td>${Formations[i].telephone}</td>
        <td>${Formations[i].password}</td>
        <td>${Formations[i].Address}</td>
        <td>${Formations[i].MAT}</td>
<td> <button class="btn btn-primary1 me-md-2" onclick="deleteUserAdmin(${Formations[i].id})" type="button">DELETE</button></td>
        
      </tr>
      `

    }
    document.getElementById("tableStudintAdmin").innerHTML = content;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////bouton supprimer User St or Pr Admine///////////////////////////////////////////////////////////////
function deleteUserAdmin(id) {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            usersTab.splice(i, 1);
        }
    }
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.reload();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Mon avis studint pour professor/////////////Tartib el profet////////////////////////////////////////
function displayMonProfessorAvisSt() {
    var connectedUserId = localStorage.getItem("connected");
    var FormationInscritTab= JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
    

    var Formations = [];
    var content = "";

    for (var i = 0; i < FormationInscritTab.length; i++) {
        if (FormationInscritTab[i].userId == connectedUserId) {
            Formations.push(FormationInscritTab[i]);
        }
    }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <div class="col-lg-4 col-md-6 pb-4">
        <div class="container d-flex justify-content-center mt-5">
        <div class="card text-center mb-5">
            <div class="circle-image">
                <img src="https://i.imgur.com/hczKIze.jpg" width="50">
            </div>
                <span class="dot"></span>
            <span class="name mb-1 fw-500">${searchObj(Formations[i].formationId,"Formation").NameProfessor}</span>
            <small class="text-black-50">${searchObj(Formations[i].formationId,"Formation").Name}</small>
            <small class="text-black-50 font-weight-bold">Tel +216${searchObj(Formations[i].userIdPr,"users").telephone}</small>
            <div class="rate bg-success py-3 text-white mt-3">
                <h6 class="mb-0">Rate your driver</h6>
                <div class="rating">
                 
                </div>
                <div class="buttons px-4 mt-0">
                <button onclick="displayAvisStudintComment(${Formations[i].userIdPr})" class="btn btn-warning btn-block rating-submit">Avis</button>
            </div>
            </div> 
        </div>
    </div>
    </div>
      `

    }
    document.getElementById("tableMonFormationAvisSt").innerHTML = content;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////colon ta3 el commont //////////////////////////////////////////////////////////
    function displayAvisStudintComment(id) {
        var content = "";
        var connectedUserId = localStorage.getItem("connected");
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        for (var i = 0; i < usersTab.length; i++) {
            if (usersTab[i].id == id) {
                content = content + `
                
                <div class="container py-5">
	<div class="row align-items-center">
		<div class="col-lg-5 mb-5 mb-lg-0">
			<div class="bg-light d-flex flex-column justify-content-center px-5" style="height: 450px;">
				<div class="d-flex align-items-center mb-5">
					<div class="btn-icon bg-primary mr-4">
						<i class="fa fa-2x fa-map-marker-alt text-white"></i>
					</div>
					<div class="mt-n1">
						<h4>Our Location</h4>
						<p class="m-0">${searchObj(usersTab[i].id,"users").Address}</p>
					</div>
				</div>
				<div class="d-flex align-items-center mb-5">
					<div class="btn-icon bg-secondary mr-4">
						<i class="fa fa-2x fa-phone-alt text-white"></i>
					</div>
					<div class="mt-n1">
						<h4>Call Us</h4>
						<p class="m-0">+216 ${searchObj(usersTab[i].id,"users").telephone}</p>
					</div>
				</div>
				<div class="d-flex align-items-center">
					<div class="btn-icon bg-warning mr-4">
						<i class="fa fa-2x fa-envelope text-white"></i>
					</div>
					<div class="mt-n1">
						<h4>Email Us</h4>
						<p class="m-0">${searchObj(usersTab[i].id,"users").email}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-7">
			<div class="section-title position-relative mb-4">
				<h1 class="display-4">Send Your avis</h1>
			</div>
			<div class="contact-form">
				
					<div class="row">
						<div class="col-6 form-group">
							<input type="text" class="form-control border-top-0 border-right-0 border-left-0 p-0" value="${searchObj(connectedUserId,"users").firstName}" id="firstNamePr" >
						</div>
						<div class="col-6 form-group">
							<input type="text" class="form-control border-top-0 border-right-0 border-left-0 p-0" value="${searchObj(connectedUserId,"users").lastName}" id="lastNamePr">
						</div>
					</div>
					<div class="form-group">
						<textarea class="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="comment" required="required" id="Comment"></textarea>
					</div>
                    
					<div>
						<button onclick="objetAvisComment(${usersTab[i].id})" class="btn btn-primary py-3 px-5" type="submit">Send Avis</button>
					</div>
				
			</div>
		</div>
	</div>
</div>

                `
                break;
            }
        }
    
        document.getElementById("tabeleMonAvisStudintComment").innerHTML = content;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////objet ta3 comment /////////////////////////////////////////////////////////    
function objetAvisComment(id) {
    var connectedUserId = localStorage.getItem("connected");
    var firstNamePr = document.getElementById("firstNamePr").value;
    var lastNamePr= document.getElementById("lastNamePr").value;
    var Comment= document.getElementById("Comment").value; 
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var AvisCommentTab= JSON.parse(localStorage.getItem("AvisCommentSt") || "[]");
    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
    var AvisCommentSt = {
        id: maxId(AvisCommentTab) + 1,
        firstNamePr:firstNamePr,
        lastNamePr:lastNamePr,
        Comment:Comment,
        userId:connectedUserId,
        userIdPr:ajouterFTab[i].id,
    }
        }
    }
    console.log(AvisCommentSt);

    // sauvegarde dans le LS
    AvisCommentTab.push(AvisCommentSt); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("AvisCommentSt", JSON.stringify(AvisCommentTab));
}
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////affichage comment ll prof////////////////////////////////////////////////////
function displayCommentPr() {
    var content = "";
    var connectedUserId = localStorage.getItem("connected");
    var AvisCommentTab= JSON.parse(localStorage.getItem("AvisCommentSt") || "[]");
    for (var i = 0; i < AvisCommentTab.length; i++) {
       if(AvisCommentTab[i].userIdPr==connectedUserId){
            content = content + `
            
            <div class="bg-white p-5">
            <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p>${AvisCommentTab[i].Comment}</p>
            <div class="d-flex flex-shrink-0 align-items-center mt-4">
                <img class="img-fluid mr-4" src="img/testimonial-2.jpg" alt="">
                <div>
                    <h5>${AvisCommentTab[i].firstNamePr}</h5>
                </div>
            </div>
        </div>

            `
       }    
        }
    

    document.getElementById("displayCommentPr").innerHTML = content;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Mon avis studint pour Studint/////////////Tartib el Studint////////////////////////////////////////
function displayMonStudintAvisPr() {
    var connectedUserId = localStorage.getItem("connected");
    var FormationInscritTab= JSON.parse(localStorage.getItem("FormationInscrit") || "[]");
    var Formations = [];
    var content = "";

    for (var i = 0; i < FormationInscritTab.length; i++) {
        if (FormationInscritTab[i].userIdPr == connectedUserId) {
            Formations.push(FormationInscritTab[i]);
        }
    }
    for (var i = 0; i < Formations.length; i++) {
        content = content + `
        <div class="col-lg-4 col-md-6 pb-4">
        <div class="container d-flex justify-content-center mt-5">
        <div class="card text-center mb-5">
            <div class="circle-image">
                <img src="https://i.imgur.com/hczKIze.jpg" width="50">
            </div>
                <span class="dot"></span>
            <span class="name mb-1 fw-500">${searchObj(FormationInscritTab[i].id,"users").firstName}.${searchObj(FormationInscritTab[i].id,"users").lastName}</span>
            <small class="text-black-50">${searchObj(Formations[i].formationId,"Formation").Name}</small>
            <small class="text-black-50 font-weight-bold">Tel +216${searchObj(FormationInscritTab[i].id,"users").telephone}</small>
            <div class="rate bg-success py-3 text-white mt-3">
                <h6 class="mb-0">Rate your driver</h6>
                <div class="rating">
                 
                </div>
                <div class="buttons px-4 mt-0">
                <button onclick="displayAvisProfessorComment(${FormationInscritTab[i].id})" class="btn btn-warning btn-block rating-submit">Submit</button>
            </div>
            </div> 
        </div>
    </div>
    </div>
      `
      
    }
    document.getElementById("tableMonFormationAvisSt").innerHTML = content;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function displayAvisProfessorComment(id) {
    var content = "";
    var connectedUserId = localStorage.getItem("connected");
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            content = content + `
            
            <div class="container py-5">
<div class="row align-items-center">
    <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="bg-light d-flex flex-column justify-content-center px-5" style="height: 450px;">
            <div class="d-flex align-items-center mb-5">
                <div class="btn-icon bg-primary mr-4">
                    <i class="fa fa-2x fa-map-marker-alt text-white"></i>
                </div>
                <div class="mt-n1">
                    <h4>Our Location</h4>
                    <p class="m-0">${searchObj(usersTab[i].id,"users").Address}</p>
                </div>
            </div>
            <div class="d-flex align-items-center mb-5">
                <div class="btn-icon bg-secondary mr-4">
                    <i class="fa fa-2x fa-phone-alt text-white"></i>
                </div>
                <div class="mt-n1">
                    <h4>Call Us</h4>
                    <p class="m-0">+216 ${searchObj(usersTab[i].id,"users").telephone}</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="btn-icon bg-warning mr-4">
                    <i class="fa fa-2x fa-envelope text-white"></i>
                </div>
                <div class="mt-n1">
                    <h4>Email Us</h4>
                    <p class="m-0">${searchObj(usersTab[i].id,"users").email}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-7">
        <div class="section-title position-relative mb-4">
            <h1 class="display-4">Send Your avis</h1>
        </div>
        <div class="contact-form">
            
                <div class="row">
                    <div class="col-6 form-group">
                        <input type="text" class="form-control border-top-0 border-right-0 border-left-0 p-0" value="${searchObj(connectedUserId,"users").firstName}" id="firstNamePr" >
                    </div>
                    <div class="col-6 form-group">
                        <input type="text" class="form-control border-top-0 border-right-0 border-left-0 p-0" value="${searchObj(connectedUserId,"users").lastName}" id="lastNamePr">
                    </div>
                </div>
                <div class="form-group">
                    <textarea class="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="comment" required="required" id="Comment"></textarea>
                </div>
                
                <div>
                    <button onclick="objetAvisCommentPr(${usersTab[i].id})" class="btn btn-primary py-3 px-5" type="submit">Send Avis</button>
                </div>
            
        </div>
    </div>
</div>
</div>

            `
            break;
        }
    }

    document.getElementById("tabeleMonAvisStudintComment").innerHTML = content;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////objet ta3 comment /////////////////////////////////////////////////////////    
function objetAvisCommentPr(id) {
    var connectedUserId = localStorage.getItem("connected");
    var firstNamePr = document.getElementById("firstNamePr").value;
    var lastNamePr= document.getElementById("lastNamePr").value;
    var Comment= document.getElementById("Comment").value;
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id ==id) {
    var userIdSt=searchObj(usersTab[i].id,"users").id;
    
        }
    }
    var AvisCommentPrTab= JSON.parse(localStorage.getItem("AvisCommentPr") || "[]");
    var AvisCommentPr = {
        id: maxId(AvisCommentPrTab) + 1,
        firstNameSt:firstNamePr,
        lastNameSt:lastNamePr,
        Comment:Comment,
        userId:connectedUserId,
        userIdSt:userIdSt,
    }
    
    console.log(AvisCommentPr);

    // sauvegarde dans le LS
    AvisCommentPrTab.push(AvisCommentPr); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("AvisCommentPr", JSON.stringify(AvisCommentPrTab));
} 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////affichage comment ll Studint////////////////////////////////////////////////////
function displayCommentSt() {
    var content = "";
    var connectedUserId = localStorage.getItem("connected");
    var AvisCommentPrTab= JSON.parse(localStorage.getItem("AvisCommentPr") || "[]");
    for (var i = 0; i < AvisCommentPrTab.length; i++) {
       if(AvisCommentPrTab[i].userIdSt==connectedUserId){
            content = content + `
            
            <div class="bg-white p-5">
            <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p>${AvisCommentPrTab[i].Comment}</p>
            <div class="d-flex flex-shrink-0 align-items-center mt-4">
                <img class="img-fluid mr-4" src="img/testimonial-2.jpg" alt="">
                <div>
                    <h5>${AvisCommentPrTab[i].firstNameSt}</h5>
                </div>
            </div>
        </div>

            `
       }    
        }
    

    document.getElementById("displayCommentSt").innerHTML = content;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////ajouter test//////////////////////////////////////////////////////////////
function addTest(id) {
    var content = "";
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
            content = content + `
            
            <div class="form" style="width:30cm ;">
            <div class="row">
            <div class="col-3">
            </div>
                <div class="col-6">
                <h1 style="color: blue;">Test ${searchObj(ajouterFTab[i].id,"Formation").Name}</h1>
                <h6>exercice 1</h6>
                <div class="form-group">
                    <input id="exercice1" type="text" class="form-control bg-light border-0" placeholder="exercice 1" style="padding: 30px 20px;">
                </div>
                    <h6>exercice 2</h6>
                    <div class="form-group">
                        <input id="exercice2" type="text" class="form-control bg-light border-0" placeholder="exercice 2" style="padding: 30px 20px;">
                    </div>
                 
                    <div class="form-group">
                    <h6>exercice 3</h6>
                            <div class="form-group">
                                <input id="exercice3" type="text" class="form-control bg-light border-0" placeholder="exercice3" style="padding: 30px 20px;">
                            </div>
                  
            <div class="form-group">
                <div class="col-sm-6" >
                    <button onclick="objetTestPr(${ajouterFTab[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;margin-left: 60%;">Add test</button>
                </div>
            </div>
            </div>
            <div class="col-3">
            </div>

            `
            break;
        }
    }
    document.getElementById("modifierformation").innerHTML = content;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////objet test prof//////////////////////y3amrou el prof /////////////////////////////////////////////////
function objetTestPr(id) {
    var connectedUserId = localStorage.getItem("connected");
    var exercice1 = document.getElementById("exercice1").value;
    var exercice2= document.getElementById("exercice2").value;
    var exercice3= document.getElementById("exercice3").value; 
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var TestPrTab= JSON.parse(localStorage.getItem("TestPr") || "[]");
    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
            
    var TestPr = {
        id: maxId(TestPrTab) + 1,
        exercice1:exercice1,
        exercice2:exercice2,
        exercice3:exercice3,
        userId:connectedUserId,
        IdFormation:ajouterFTab[i].id ,
    }
        }
    }
    console.log(TestPr);

    // sauvegarde dans le LS
    TestPrTab.push(TestPr); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("TestPr", JSON.stringify(TestPrTab));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////afficher le test ll studint////////////////////////////////////////////////////////////////////
function addResponse(id) {
    var content = "";
    var TestPrTab= JSON.parse(localStorage.getItem("TestPr") || "[]");
    for (var i = 0; i < TestPrTab.length; i++) {
        if (TestPrTab[i].IdFormation ==id) {
            content = content + `
            
            <div class="form" style="width:30cm ;">
            <div class="row">
            <div class="col-3">
            </div>
                <div class="col-6">
                <h1 style="color: blue;">Test ${searchObj(TestPrTab[i].IdFormation,"Formation").Name}</h1>
                <h6>exercice 1</h6>
                <div class="form-group">
                <h6>${TestPrTab[i].exercice1}</h6>
                    <input id="Response1" type="text" class="form-control bg-light border-0" placeholder="Response 1" style="padding: 30px 20px;">
                </div>
                    <h6>exercice 2</h6>
                    <h6>${TestPrTab[i].exercice2}</h6>
                    <div class="form-group">
                        <input id="Response2" type="text" class="form-control bg-light border-0" placeholder="Response 2" style="padding: 30px 20px;">
                    </div>
                 
                    <div class="form-group">
                    <h6>exercice 3</h6>
                    <h6>${TestPrTab[i].exercice3}</h6>
                            <div class="form-group">
                                <input id="Response3" type="text" class="form-control bg-light border-0" placeholder="Response 3" style="padding: 30px 20px;">
                            </div>
                  
            <div class="form-group">
                <div class="col-sm-6" >
                    <button onclick="objetResponseSt(${TestPrTab[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;margin-left: 60%;">Add test</button>
                </div>
            </div>
            </div>
            <div class="col-3">
            </div>

            `
        }
    }
    document.getElementById("modifierformation").innerHTML = content;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////objet Reponse//////////////////////////////
function objetResponseSt(id) {
    var connectedUserId = localStorage.getItem("connected");
    var Response1 = document.getElementById("Response1").value;
    var Response2= document.getElementById("Response2").value;
    var Response3= document.getElementById("Response3").value; 
    var ajouterFTab = JSON.parse(localStorage.getItem("Formation") || "[]");
    var ResponseStTab= JSON.parse(localStorage.getItem("ResponseSt") || "[]");
    for (var i = 0; i < ajouterFTab.length; i++) {
        if (ajouterFTab[i].id == id) {
            
    var ResponseSt = {
        id: maxId(ResponseStTab)+1,
        Response1:Response1,
        Response2:Response2,
        Response3:Response3,
        userId:connectedUserId,
        IdFormation:ajouterFTab[i].id,
    }
        }
    }
    console.log(ResponseSt);

    // sauvegarde dans le LS
    ResponseStTab.push(ResponseSt); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("ResponseSt", JSON.stringify(ResponseStTab));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////afichage bech yeti notes ll prof /////////////////////////////////////////////////////////////////////////////////////
function NotesPr(id) {
    var content = "";
    var ResponseStTab= JSON.parse(localStorage.getItem("ResponseSt") || "[]");
    for (var i = 0; i < ResponseStTab.length; i++) {
        if (ResponseStTab[i].IdFormation ==id) {
            content = content + `
            
            <div class="form" style="width:30cm ;">
            <div class="row">
            <div class="col-3">
            </div>
                <div class="col-6">
                <h1 style="color: blue;">Test ${searchObj(ResponseStTab[i].IdFormation,"Formation").Name}</h1>
                <h6>exercice 1</h6>
                <div class="form-group">
                <h6>${searchObj(ResponseStTab[i].IdFormation,"TestPr").exercice1}</h6>
                <h6>${ResponseStTab[i].Response1}</h6>
                </div>
                    <h6>exercice 2</h6>
                    <h6>${searchObj(ResponseStTab[i].IdFormation,"TestPr").exercice2}</h6>
                    <div class="form-group">
                    <h6>${ResponseStTab[i].Response2}</h6>
                    </div>
                 
                    <div class="form-group">
                    <h6>exercice 3</h6>
                    <h6>${searchObj(ResponseStTab[i].IdFormation,"TestPr").exercice2}</h6>
                            <div class="form-group">
                            <h6>${ResponseStTab[i].Response3}</h6>
                            </div>
                            <div class="form-group">
                                <input id="Notes" type="number" class="form border-0" placeholder="Notes/20" style="padding: 30px 20px;">
                            </div>
                  
            <div class="form-group">
                <div class="col-sm-6" >
                    <button onclick="objetNotesPr(${ResponseStTab[i].id})" class="btn btn-primary btn-block" type="submit" style="height: 60px;margin-left: 60%;">Add test</button>
                </div>
            </div>
            </div>
            <div class="col-3">
            </div>

            `
          
        }
    }
    document.getElementById("tabeleNotes").innerHTML = content;
}   
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////obejt ll notes ///////////////eli ymedha el prof///////////////////////////////////////////////////////////////
function objetNotesPr(id) {
    var connectedUserId = localStorage.getItem("connected");
    var Notes = document.getElementById("Notes").value;
    var ResponseStTab= JSON.parse(localStorage.getItem("ResponseSt") || "[]");
    var NotesPrTab= JSON.parse(localStorage.getItem("NotesPr") || "[]");
    for (var i = 0; i < ResponseStTab.length; i++) {
        if (ResponseStTab[i].id == id) {
            
    var NotesPr = {
        id: maxId(NotesPrTab)+1,
        Notes:Number(Notes),
        userId:connectedUserId,
        userIdSt:ResponseStTab[i].userId,
        IdFormation:ResponseStTab[i].IdFormation,
    }
        }
    }
    console.log(NotesPr);

    // sauvegarde dans le LS
    NotesPrTab.push(NotesPr); //push: insertion d'un nouveau user dans un  tab 
    localStorage.setItem("NotesPr", JSON.stringify(NotesPrTab));
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////Tri notes //////////////////////////afichage ll prof/////////////////////////////////////
function displayNotes() {
    var connectedUserId = localStorage.getItem("connected");
    var NotesPrTab= JSON.parse(localStorage.getItem("NotesPr") || "[]");
    var Formations = [];
    
    var content = "";
    for (var i = 0; i < NotesPrTab.length; i++) {
        if (NotesPrTab[i].userId==connectedUserId) {
            Formations.push(NotesPrTab[i]);
        }
    }
    for (var i = 0; i < Formations.length-1; i++){
        for (var j= i+1; j < Formations.length; j++) {
        if (Number(Formations[i].Notes)<Number(Formations[j].Notes)) {
            aux = Formations[i];
            Formations[i] = Formations[j];
            Formations[j] = aux;
        }
    }
}
        for (var i = 0; i < Formations.length; i++){
        content = content + `
        <tr> 
        <td>${i+1}</td>
        <td>${searchObj(Formations[i].IdFormation,"Formation").Name}</td>
        <td>${searchObj(Formations[i].userIdSt,"users").firstName}${searchObj(Formations[i].userIdSt,"users").lastName}</td>
        <td>${Formations[i].Notes}</td>
        
      </tr>
      `
        
        }


    
    
    document.getElementById("tableStudintNotes").innerHTML = content;
}
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////Profile Professor////////////////////////////////////////////////////////////////////////
    function ProfilePr() {
        var content = "";
        var connectedUserId = localStorage.getItem("connected");
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        for (var i = 0; i < usersTab.length; i++) {
            if (usersTab[i].role =="Professor") {
                content = content + `
                <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5  style="color:red;">
                                ${searchObj(connectedUserId,"users").firstName} ${searchObj(connectedUserId,"users").lastName}
                                </h5>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Website Link</a><br/>
                        <a href="">facebook Profile</a><br/>
                        <a href="">linkedin Profile</a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").id}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").telephone}</p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").Address}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Role</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Professor</p>
                                        </div>
                                    </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    
                `
                break;
            }
        }
        document.getElementById("ProfilePr").innerHTML = content;
    }
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////Profile Studint////////////////////////////////////////////////////////////////////////
    function ProfileSt() {
        var content = "";
        var connectedUserId = localStorage.getItem("connected");
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        for (var i = 0; i < usersTab.length; i++) {
            if (usersTab[i].role =="Studint") {
                content = content + `
                <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5  style="color: rgba(28, 122, 28, 0.842)">
                                ${searchObj(connectedUserId,"users").firstName} ${searchObj(connectedUserId,"users").lastName}
                                </h5>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Website Link</a><br/>
                        <a href="">facebook Profile</a><br/>
                        <a href="">linkedin Profile</a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").id}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").telephone}</p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").Address}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>City</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${searchObj(connectedUserId,"users").City}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Role</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Studint</p>
                                        </div>
                                    </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    
                `
                break;
            }
        }
        document.getElementById("ProfileSt").innerHTML = content;
    }