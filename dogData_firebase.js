import { initializeApp } from 'firebase/app';
import { getDatabase, set, get, update, remove, ref, child } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCKuaoONp77W6Yxrtz3McXueNni4gxVmfU",
  authDomain: "woofy-46f44.firebaseapp.com",
  databaseURL: "https://woofy-46f44-default-rtdb.firebaseio.com",
  projectId: "woofy-46f44",
  storageBucket: "woofy-46f44.appspot.com",
  messagingSenderId: "762347083399",
  appId: "1:762347083399:web:89bbe7dc09b48c21218a22",
  measurementId: "G-F5ZR88TD90"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
        
        

        const db = getDatabase();
       

        

        var insertBtn = document.querySelector("#insertBtn");
        var deleteBtn = document.querySelector("#deleteBtn");
        var updateBtn = document.querySelector("#updateBtn");
        var findBtn = document.querySelector("#findBtn");

        insertBtn.addEventListener('click', insertDog(e));
        deleteBtn.addEventListener('click', deleteDog());
        editBtn.addEventListener('click', updateDog);
        findBtn.addEventListener('click', findDog);

        function insertDog(e){
            e.preventDefault();

            var dogName = document.querySelector("#dogName");
            var dogDescription = document.querySelector("#dogDescription");
            //var dogName = document.querySelector("#dogName"); for dog image
            var dogAge = document.querySelector("#dogAge");
            var dogStatus = document.querySelector("#dogStatus");
            var editdogAge = document.querySelector("#editdogAge");
            var editdogStatus = document.querySelector("#editdogStatus");

            var findViaName = document.querySelector("#findName");
            var findAge = document.querySelector("#findAge");
            var findDescription = document.querySelector("#findDescription");
            var findStatus = document.querySelector("#findStatus");


            set(ref(db, "Dogs/" + dogName.value), {
                Name: dogName.value,
                Description: dogDescription.value,
                Age: dogAge.value,
                Status: dogStatus.value
            })
            .then(()=>{
                alert("Data entered successfully!!")
            })
            .catch((error)=>{
                alert(error)
            });

            
        }


        function updateDog(e){
            e.preventDefault();

            var dogName = document.querySelector("#dogName");
            var dogDescription = document.querySelector("#dogDescription");
            //var dogName = document.querySelector("#dogName"); for dog image
            var dogAge = document.querySelector("#dogAge");
            var dogStatus = document.querySelector("#dogStatus");
            var editdogAge = document.querySelector("#editdogAge");
            var editdogStatus = document.querySelector("#editdogStatus");

            var findViaName = document.querySelector("#findName");
            var findAge = document.querySelector("#findAge");
            var findDescription = document.querySelector("#findDescription");
            var findStatus = document.querySelector("#findStatus");


            update(ref(db, "Dogs/" + findViaName.value), {
                //Image: 
                Age: editdogAge.value,
                Status: editdogStatus.value
            })
            .then(()=>{
                alert("Data updated successfully!!");
            })
            .catch((error)=>{
                alert(error)
            });


            
        }



        function deleteDog(e){
            e.preventDefault();

            var dogName = document.querySelector("#dogName");
            var dogDescription = document.querySelector("#dogDescription");
            //var dogName = document.querySelector("#dogName"); for dog image
            var dogAge = document.querySelector("#dogAge");
            var dogStatus = document.querySelector("#dogStatus");
            var editdogAge = document.querySelector("#editdogAge");
            var editdogStatus = document.querySelector("#editdogStatus");

            var findViaName = document.querySelector("#findName");
            var findAge = document.querySelector("#findAge");
            var findDescription = document.querySelector("#findDescription");
            var findStatus = document.querySelector("#findStatus");


            remove(ref(db, "Dogs/" + dogName.value))
            .then(()=>{
              alert("Data deleted successfully!!");
            })
            .catch((error)=>{
              alert(error);
            })

            
        }



        function findDog(e){
            e.preventDefault();

            var dogName = document.querySelector("#dogName");
            var dogDescription = document.querySelector("#dogDescription");
            //var dogName = document.querySelector("#dogName"); for dog image
            var dogAge = document.querySelector("#dogAge");
            var dogStatus = document.querySelector("#dogStatus");
            var editdogAge = document.querySelector("#editdogAge");
            var editdogStatus = document.querySelector("#editdogStatus");

            var findViaName = document.querySelector("#findName");
            var findAge = document.querySelector("#findAge");
            var findDescription = document.querySelector("#findDescription");
            var findStatus = document.querySelector("#findStatus");


            const dbref = ref(db);
            const container = document.getElementById('fetchDetailDiv');

            get(child(dbref, "Dogs/" + findViaName.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findAge.innerHTML = "Age: "+snapshot.val().Age;
                    findDescription.innerHTML = "Description: "+snapshot.val().Description;
                    findStatus.innerHTML = "Status: "+snapshot.val().Status;
                } else{
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }

        

export {insertDog, findDog, updateDog, deleteDog}


