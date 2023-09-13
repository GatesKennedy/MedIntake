//=== CHAT GPT PROMPT ===

// From the perspective of a dentist,
// what are the associated risks to the dental health of a person who <VAR>?
// Please list these risks as an array of objects defined as
// {name: string, desc: string} in JSON format
// where 'name' is the name of the risk
// and 'desc' is the description of the risk to your oral health.

// export type DentalIssue = {
// 	name: string;
// 	desc: string;
// 	causes: QuestionNameEnum[]
// }

// export const allDentalRisks: DentalIssue[] = [


// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE, QuestionNameEnum.IS_DIABETIC],
// 				"name": "Gum Disease (Periodontal Disease)",
// 				"desc": "As individuals age, they are at a higher risk of developing gum disease, which can lead to gum recession, tooth mobility, and tooth loss."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Tooth Decay (Cavities)",
// 				"desc": "Age-related factors, including reduced saliva production and changes in diet, can increase susceptibility to tooth decay."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Dry Mouth (Xerostomia)",
// 				"desc": "Many older adults take medications that can cause dry mouth, which increases the risk of cavities and gum problems."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Tooth Sensitivity",
// 				"desc": "Tooth sensitivity to hot, cold, or sweet foods and drinks can become more common with age due to enamel wear and gum recession."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Tooth Wear",
// 				"desc": "Over time, teeth can naturally wear down, becoming shorter and flatter, which can affect their function and appearance."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Oral Cancer",
// 				"desc": "The risk of oral cancer increases with age, especially for those who have a history of tobacco or alcohol use."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Root Decay",
// 				"desc": "Exposed tooth roots due to gum recession are more susceptible to decay, especially if proper oral hygiene is not maintained."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Denture-Related Issues",
// 				"desc": "Many older adults wear dentures, which can lead to problems such as ill-fitting dentures, gum irritation, and sores."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Reduced Saliva Production",
// 				"desc": "Aging can result in reduced saliva flow, which can increase the risk of cavities and make chewing and swallowing more difficult."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Medication Side Effects",
// 				"desc": "Certain medications taken by older adults may have side effects that affect oral health, including dry mouth and gum enlargement."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Mobility Issues",
// 				"desc": "Mobility issues can make it challenging for older individuals to maintain proper oral hygiene practices, increasing the risk of dental problems."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_OVER_SIXTYFIVE],
// 				"name": "Nutritional Challenges",
// 				"desc": "Poor nutrition due to dietary restrictions, difficulty chewing, or decreased appetite can impact oral health and overall well-being."

// 	},

// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Gum Disease (Periodontal Disease)",
// 				"desc": "Diabetes can increase the risk of gum disease. Elevated blood sugar levels can lead to inflammation of the gums and impaired ability to fight infections. Gum disease can progress more rapidly and become more severe in individuals with diabetes."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Delayed Healing",
// 				"desc": "Diabetes can slow down the body's natural healing processes. This is particularly concerning after dental procedures or oral surgery, as it may lead to delayed recovery and a higher risk of complications."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Reduced Saliva Production",
// 				"desc": "Some people with diabetes experience dry mouth, a condition known as xerostomia. Reduced saliva production can increase the risk of tooth decay and oral infections since saliva helps neutralize acids and protect teeth."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Thrush (Candidiasis)",
// 				"desc": "People with diabetes are more susceptible to oral fungal infections like thrush. High blood sugar levels create an ideal environment for the growth of the Candida fungus in the mouth, leading to white patches on the tongue and other oral tissues."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Taste Alterations",
// 				"desc": "Diabetes can cause alterations in taste perceptions. Some individuals may experience a persistent metallic or bitter taste in the mouth, which can affect their enjoyment of food and beverages."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Tooth Decay",
// 				"desc": "High blood sugar levels in diabetes can contribute to tooth decay. Elevated glucose levels provide an energy source for harmful oral bacteria, leading to the production of acids that erode tooth enamel."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Increased Risk of Infections",
// 				"desc": "Poorly controlled diabetes weakens the immune system, making individuals more vulnerable to infections. This includes oral infections like gum disease and abscesses, which can have serious consequences for dental health."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Altered Wound Healing",
// 				"desc": "Diabetes can alter the body's ability to heal wounds, including wounds in the mouth. This can lead to delayed recovery after oral surgeries or injuries."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Difficulty Controlling Blood Sugar",
// 				"desc": "Pain or discomfort from oral health issues can make it challenging for individuals with diabetes to maintain stable blood sugar levels. Dental problems can affect the ability to eat well and manage insulin or medications effectively."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_DIABETIC],
// 				"name": "Increased Risk of Tooth Loss",
// 				"desc": "Due to the combined effects of gum disease, tooth decay, delayed healing, and compromised immune function, individuals with diabetes have a higher risk of tooth loss compared to those without the condition."
// 			}

// 		// answer: null
// 	,

// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Dry Mouth (Xerostomia)",
// 				"desc": "Many medications, including some common ones, can cause dry mouth as a side effect. Dry mouth reduces saliva production, increasing the risk of tooth decay, gum disease, and oral discomfort."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Gingival Overgrowth",
// 				"desc": "Certain medications, such as anticonvulsants, calcium channel blockers, and immunosuppressants, may lead to gingival overgrowth or enlargement of the gum tissues. This condition can make proper oral hygiene more challenging and increase the risk of gum disease."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Candidiasis (Oral Thrush)",
// 				"desc": "Some medications, particularly corticosteroids and antibiotics, can disrupt the balance of oral microorganisms, allowing the overgrowth of Candida yeast in the mouth, leading to oral thrush, a fungal infection."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Increased Risk of Bleeding",
// 				"desc": "Blood-thinning medications (anticoagulants) and certain antiplatelet drugs may increase the risk of bleeding during dental procedures, including routine cleanings and extractions. Dentists need to be aware of these medications to provide safe care."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Altered Taste Sensation",
// 				"desc": "Some medications can cause changes in taste perception, leading to a metallic or unpleasant taste in the mouth. This can affect a person's appetite and overall enjoyment of food."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Tooth Decay and Erosion",
// 				"desc": "Medications that contain sugar or have acidic properties (e.g., liquid medications) can contribute to tooth decay and enamel erosion if not properly managed. Rinsing the mouth after taking such medications can help mitigate this risk."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Oral Ulcers",
// 				"desc": "Certain medications, including some used in chemotherapy, can lead to the development of oral ulcers or sores in the mouth. These can be painful and require special oral care."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Reduced Immune Response",
// 				"desc": "Immunosuppressive medications can weaken the body's immune response, making it more susceptible to infections in the oral cavity, including gum infections and abscesses."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_MEDICATED],
// 				"name": "Osteonecrosis of the Jaw",
// 				"desc": "Some medications, particularly certain types of bisphosphonates used to treat osteoporosis and cancer, are associated with a rare condition called osteonecrosis of the jaw (ONJ). ONJ can lead to jawbone deterioration and requires careful dental management."
// 			},

// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Oral Infections",
// 				"desc": "Reduced ability to maintain proper oral hygiene following a stroke or heart attack may lead to an increased risk of oral infections, including gum disease and tooth decay."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Dry Mouth (Xerostomia)",
// 				"desc": "Some medications prescribed after a stroke or heart attack may cause dry mouth, reducing saliva production and increasing the risk of cavities and gum problems."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Difficulty Swallowing (Dysphagia)",
// 				"desc": "Dysphagia, which can result from a stroke or heart attack, may lead to challenges in chewing and swallowing food, potentially affecting dietary choices and oral health."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Oral Medications",
// 				"desc": "Patients may be prescribed various medications, and some of these medications can have side effects that impact oral health, such as bleeding gums or changes in taste perception."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Poor Nutrition",
// 				"desc": "Following a stroke or heart attack, individuals may have dietary restrictions or difficulties in maintaining a balanced diet, which can affect oral health and overall well-being."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Limited Mobility",
// 				"desc": "Physical limitations resulting from a stroke may affect a person's ability to perform proper oral hygiene routines, increasing the risk of dental problems."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Communication Challenges",
// 				"desc": "Speech and communication difficulties after a stroke can lead to decreased verbal communication with dental professionals, potentially hindering oral health assessments and care."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Blood Thinners",
// 				"desc": "Some patients post-stroke or heart attack may be prescribed blood-thinning medications, which can increase the risk of bleeding during dental procedures."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Stress",
// 				"desc": "The emotional and psychological stress associated with a stroke or heart attack may contribute to bruxism (teeth grinding) or other stress-related oral health issues."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_VASCULAR_ISSUE],
// 				"name": "Impact on Routine Dental Care",
// 				"desc": "Patients may postpone or neglect regular dental checkups and cleanings due to their health condition, which can result in undetected oral health problems."
// 			}

// 		// answer: null
// 	,


// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Bruxism",
// 				"desc": "Sleep apnea may be linked to bruxism (teeth grinding), which can lead to tooth damage, sensitivity, and jaw pain."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Dry Mouth (Xerostomia)",
// 				"desc": "Frequent pauses in breathing during sleep apnea can lead to dry mouth, reducing saliva production. Saliva helps protect teeth from decay and gum disease."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Gum Disease (Periodontal Disease)",
// 				"desc": "The reduced oxygen levels in the blood during sleep apnea episodes may increase the risk of gum disease, which can lead to tooth loss and bone damage."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Oral Breathing",
// 				"desc": "People with sleep apnea may breathe through their mouth during sleep. Chronic oral breathing can lead to dry mouth, bad breath, and an increased risk of dental problems."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Tooth Decay",
// 				"desc": "Dry mouth and decreased saliva flow associated with sleep apnea can increase the risk of tooth decay."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Impaired Healing",
// 				"desc": "Sleep apnea can affect the body's ability to heal effectively. This may impact recovery after dental procedures and increase the risk of complications."
// 			},
// 			{
// 					causes: [QuestionNameEnum.HAS_APNEA],
// 				"name": "Temporomandibular Joint (TMJ) Disorders",
// 				"desc": "The clenching or grinding of teeth, often associated with sleep apnea, can contribute to TMJ disorders, leading to jaw pain and dysfunction."
// 			}


// 		// answer: null
// 	,



// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Tooth Staining",
// 				"desc": "Coffee is a highly pigmented beverage that can cause yellow or brown stains on tooth enamel, leading to a dull or discolored smile."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Enamel Erosion",
// 				"desc": "Coffee is acidic, and frequent consumption can weaken tooth enamel over time. Weakened enamel is more susceptible to tooth decay and sensitivity."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Bad Breath (Halitosis)",
// 				"desc": "Coffee's strong odor can contribute to bad breath, and it can also reduce saliva production, which normally helps to cleanse the mouth of odor-causing bacteria."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Dry Mouth",
// 				"desc": "Caffeine in coffee can contribute to dry mouth (xerostomia), reducing saliva flow. A dry mouth increases the risk of tooth decay and gum disease."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Increased Risk of Stains from Other Sources",
// 				"desc": "Regular coffee consumption can make teeth more porous, increasing their susceptibility to staining from other foods and drinks, such as tea, red wine, and berries."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Gum Irritation",
// 				"desc": "Coffee's acidity and heat can irritate the gums, leading to discomfort and potentially contributing to gum disease over time."
// 			},
// 			{
// 				causes: [QuestionNameEnum.IS_COFFEE_REGULAR],
// 				"name": "Caffeine Addiction and Teeth Grinding",
// 				"desc": "Coffee contains caffeine, which can lead to addiction and heightened stress levels. Stress-related teeth grinding (bruxism) can cause tooth damage and jaw pain."
// 			}

// 		// answer: null
// 	,




// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Tooth Loss",
// 				"desc": "Untreated or severe gum disease (periodontitis) can lead to the gradual destruction of the supporting tissues and bone around teeth, eventually causing tooth loss."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Bad Breath (Halitosis)",
// 				"desc": "Gum disease often results in persistent bad breath due to the presence of bacteria and the release of foul-smelling gases in the mouth."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Gum Recession",
// 				"desc": "Advanced gum disease can cause the gums to recede or pull away from the teeth, exposing the tooth roots. This can lead to tooth sensitivity and an unattractive smile."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Tooth Sensitivity",
// 				"desc": "Receding gums can expose the sensitive tooth roots, causing increased tooth sensitivity to temperature and certain foods and drinks."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Pain and Discomfort",
// 				"desc": "Gum disease can cause pain, discomfort, and swelling in the gums, especially during eating or when brushing and flossing."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Tooth Mobility",
// 				"desc": "As gum disease progresses, the supporting bone is compromised, leading to tooth mobility. Loose teeth can affect eating and speaking."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Oral Infections",
// 				"desc": "Gum disease creates pockets or spaces between the gums and teeth, which can trap food particles and bacteria, leading to recurrent oral infections."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Compromised Overall Health",
// 				"desc": "Emerging research suggests a link between gum disease and systemic health conditions such as heart disease, diabetes, and respiratory issues."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Increased Dental Treatment Needs",
// 				"desc": "Patients with gum disease often require more frequent dental treatments, including scaling and root planing (deep cleaning), to manage and slow the progression of the disease."
// 			},
// 			{
// 						causes: [QuestionNameEnum.HAS_GUM_DISEASE],
// 				"name": "Cosmetic Concerns",
// 				"desc": "Gum disease can result in an uneven gumline and an unattractive smile, impacting a person's self-esteem and confidence."
// 			},

// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Genetic Predisposition",
// 				"desc": "Children of parents with dentures may inherit a genetic predisposition to dental issues, such as tooth loss or gum disease, which can affect their own oral health."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Poor Oral Hygiene Habits",
// 				"desc": "If parents with dentures have poor oral hygiene habits, they may not emphasize the importance of oral care to their children, potentially leading to neglect of dental hygiene routines."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Lack of Preventive Care",
// 				"desc": "Growing up in an environment where parents do not receive regular dental checkups or preventive care may influence the children to adopt a similar approach, increasing their risk of dental problems."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Nutritional Habits",
// 				"desc": "Dietary choices and eating habits within the family can impact the oral health of children. If parents with dentures have poor dietary choices, their children may be at risk of tooth decay and other issues."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Limited Dental Guidance",
// 				"desc": "Children may receive limited guidance and education about proper dental care and healthy habits from parents with dentures, potentially leading to misinformation or misconceptions about oral health."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Inherited Dental Conditions",
// 				"desc": "Certain dental conditions, such as malocclusion or enamel defects, may have a genetic component. Children of parents with dentures may be at a higher risk of inheriting such conditions."
// 			},
// 			{
// 				causes: [QuestionNameEnum.HAS_DENTURED_PARENTS],
// 				"name": "Psychological Impact",
// 				"desc": "Growing up in an environment where parents have dentures can sometimes lead to psychological impacts, such as dental anxiety or low self-esteem, which may affect a person's willingness to seek dental care."
// 			},

// 			{
// 					causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Gum Disease (Periodontal Disease)",
// 				"desc": "Smoking reduces blood flow to the gums, increasing the risk of gum disease, including gingivitis and more severe forms of periodontal disease."
// 			},
// 			{
// 					causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Tooth Decay",
// 				"desc": "Smoking can contribute to tooth decay by causing dry mouth, reducing saliva production, and increasing the risk of cavities."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Staining and Discoloration",
// 				"desc": "Nicotine and tar in tobacco cause teeth to become stained and discolored, often turning them yellow or brown."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Halitosis (Bad Breath)",
// 				"desc": "Smoking can lead to persistent bad breath due to tobacco residue in the mouth and an increased risk of gum disease."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Delayed Healing",
// 				"desc": "Smoking interferes with the body's ability to heal, which can lead to slower recovery after dental procedures, including extractions and surgeries."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Oral Cancer",
// 				"desc": "Tobacco use, including smoking, is a major cause of oral cancer, affecting the lips, tongue, mouth, and throat."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Reduced Success of Dental Treatments",
// 				"desc": "Smokers may experience reduced success rates with dental treatments like implants and root canals due to compromised healing and a higher risk of complications."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Reduced Taste and Smell Sensations",
// 				"desc": "Smoking can dull taste and smell sensations, affecting a person's ability to fully enjoy food and beverages."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Decreased Blood Circulation",
// 				"desc": "Smoking narrows blood vessels, reducing blood circulation, which can negatively impact the health of the gums and the ability of oral tissues to repair themselves."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Increased Risk of Dry Socket",
// 				"desc": "After tooth extraction, smokers are at a higher risk of developing dry socket, a painful condition where the blood clot in the socket is dislodged or dissolves prematurely."
// 			},
// 			{	causes: [QuestionNameEnum.IS_SMOKER],
// 				"name": "Tooth Loss",
// 				"desc": "Due to the increased risk of gum disease, tooth decay, and compromised healing, smokers are more likely to experience tooth loss compared to non-smokers."
// 			},




// 			{
// 				"name": "Gum Disease (Periodontal Disease)",
// 				"desc": "Without regular dental cleanings, plaque and tartar can accumulate, increasing the risk of gum disease. Gingivitis, an early stage of gum disease, can progress to more severe periodontal disease, leading to gum inflammation, bleeding, and potential tooth loss.",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 			},
// 			{
// 				"name": "Tooth Decay",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Plaque buildup on teeth can lead to tooth decay. Bacteria in plaque produce acids that can erode tooth enamel, causing cavities. Regular cleanings help remove plaque, reducing the risk of decay."
// 			},
// 			{
// 				"name": "Bad Breath (Halitosis)",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Untreated plaque and tartar can harbor odor-causing bacteria. Without cleanings, persistent bad breath (halitosis) can develop and may not be effectively addressed through regular oral hygiene practices."
// 			},
// 			{
// 				"name": "Staining and Discoloration",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Over time, without professional cleanings, teeth may become discolored and stained due to the accumulation of surface stains and tartar. This can affect the appearance of the smile."
// 			},
// 			{
// 				"name": "Reduced Detection of Oral Issues",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Regular dental cleanings often include comprehensive oral examinations. Not having these checkups can lead to undetected dental problems, such as early signs of oral cancer, cavities, or gum disease."
// 			},
// 			{
// 				"name": "Increased Treatment Costs",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Delaying dental cleanings can result in the need for more extensive treatments later on. This can lead to higher dental expenses due to the advanced state of dental issues that could have been prevented or treated earlier."
// 			},
// 			{
// 				"name": "Tooth Sensitivity",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Plaque and tartar can accumulate at the gumline, leading to gum recession and exposed tooth roots. This can cause increased tooth sensitivity to hot, cold, sweet, or acidic foods and beverages."
// 			},
// 			{
// 				"name": "Potential Tooth Loss",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Neglecting dental cleanings can contribute to advanced gum disease and tooth decay. In severe cases, it may lead to tooth loss, affecting the functionality and appearance of the smile."
// 			},
// 			{
// 				"name": "Oral Health Impact on Overall Health",
// 				causes: [QuestionNameEnum.IS_CLEANED_RECENTLY],
// 				"desc": "Poor oral health has been linked to systemic health issues, including cardiovascular disease and diabetes. Neglecting dental cleanings may increase the risk of these broader health problems."
// 			}
//