console.log("we are working here???");

document.getElementById('diagnosButton').addEventListener('click',function(){
    let patientName = document.querySelector('#patient_name').value;
    let ageRange = document.querySelector('#age_range');
    let symptons = document.querySelector('#sypmtons');
     
    let verdict = chechSymptoms(getSymptoms(symptons.value));
    let output = `${patientName} ${verdict}`;
    document.querySelector("#result").innerHTML=output

    
    // console.log(patientName.value,ageRange.value,symptons.value)

}
    
)

function handleDiagnos(){
    console.log("heeeyy")
}


const getSymptoms = (str) =>  {
    
    let symptoms = str.toLowerCase().split(',');
	return symptoms;

}

const chechSymptoms = (symptoms) => {
    console.log("we are checking symptoms")

	let illness = "";
	symptoms.map(smt => {
       
		switch(smt){
				case "weakness": {
                      if((symptoms.includes("shivering") || symptoms.includes("headache")) || symptoms.includes("dehydration") || symptoms.includes("muscle ache") ){
                                illness = "You have Fever. ";
                                console.log(illness)
							}
                        break;
                  }
							
                        
				case "shivering":
							if(symptoms.includes("body weakness") || symptoms.includes("dehydration") || symptoms.includes("muscle ache") || symptoms.includes("headache")){
								illness = "You have Fever";
							}
					break;
					case "dehydration":
							if((symptoms.includes("shivering") || symptoms.includes("headache")) && (symptoms.includes("weakness") || symptoms.includes("muscle ache"))){
								illness = "You have Fever";
							}
					break;
					case "muscle ache":
							if(symptoms.includes("shivering") || symptoms.includes("dehydration") || symptoms.includes("weakness") || symptoms.includes("headache")){
								illness = "You have Fever";
							}
					break;
					case "chest pain":
							if((symptoms.includes("vomitting") && symptoms.includes("hearburn")) || symptoms.includes("abdominal pain") || symptoms.includes("nausea") || symptoms.includes("indigestion")){
								illness = "You have Ulcer";
							}
					break;
					case "heartburn":
							if((symptoms.includes("vomitting") && symptoms.includes("chest pain")) || symptoms.includes("abdominal pain") || symptoms.includes("nausea") || symptoms.includes("indigestion")){
								illness = "You have Ulcer";
							}
					break;
					case "vomitting":
							if((symptoms.includes("heartburn") && symptoms.includes("chest pain")) || symptoms.includes("abdominal pain") || symptoms.includes("nausea") || symptoms.includes("indigestion")){
								illness = "You have Ulcer";
							}
					break;
					case "fever":
							if((symptoms.includes("") && symptoms.includes("shivering")) || symptoms.includes("sweating") || symptoms.includes("nausea") || symptoms.includes("headache")){
								illness = "You have Malaria";
							} else if((symptoms.includes("abdominal pain") && symptoms.includes("shivering")) || symptoms.includes("sweating") || symptoms.includes("nausea") || symptoms.includes("abdominal pain")){
								illness = "You have Malaria";
							}
		
							
					break

				}
    })
    console.log("we are returning", illness)
			return illness;
}