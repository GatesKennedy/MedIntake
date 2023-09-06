export type IdentityQuestion = {
	name: string;
	prompt: string;
	error: string;
	result: string | null;
	answer: string | null;
}
export const identityQuestions: IdentityQuestion[] = [
	{
		name: 'firstName',
		prompt: 'First Name is required...',
		error: 'First Name is required...',
		result: null,
		answer: null
	},
	{
		name: 'lastName',
		prompt: 'Last Name is required...',
		error: 'Last Name is required...',
		result: null,
		answer: null
	},
	{
		name: 'email',
		prompt: 'Where will we send your results?',
		error: 'Where will we send your results?',
		result: null,
		answer: null
	},
]

export enum IdentityNameEnum  {
	ID_EMAIL = 'email',
	ID_FIRST_NAME = 'firstName',
	ID_LAST_NAME = 'lastName',
}
export enum QuestionNameEnum {
	HAS_APNEA = 'hasApnea',
	HAS_DENTURED_PARENTS = 'hasDenturedParents',
	HAS_GUM_DISEASE = 'hasGumDisease',
	HAS_VASCULAR_ISSUE = 'hasVascularIssue',
	IS_CLEANED_RECENTLY = 'isCleanedRecently',
	IS_COFFEE_REGULAR = 'isCoffeeRegular',
	IS_DIABETIC = 'isDiabetic',
	IS_MEDICATED = 'isMedicated',
	IS_OVER_SIXTYFIVE = 'isOver65',
	IS_SMOKER = 'isSmoker',
}

export type HistoryQuestion = {
	name: QuestionNameEnum;
	prompt: string;
	result: {name: string, desc: string}[];
	// answer: boolean | null;
}

export const historyQuestions: HistoryQuestion[] = [
	{
		name: QuestionNameEnum.IS_OVER_SIXTYFIVE,
		prompt: 'Are you over 65 years old?',
		result: [
			{
				"name": "Gum Disease (Periodontal Disease)",
				"desc": "As individuals age, they are at a higher risk of developing gum disease, which can lead to gum recession, tooth mobility, and tooth loss."
			},
			{
				"name": "Tooth Decay (Cavities)",
				"desc": "Age-related factors, including reduced saliva production and changes in diet, can increase susceptibility to tooth decay."
			},
			{
				"name": "Dry Mouth (Xerostomia)",
				"desc": "Many older adults take medications that can cause dry mouth, which increases the risk of cavities and gum problems."
			},
			{
				"name": "Tooth Sensitivity",
				"desc": "Tooth sensitivity to hot, cold, or sweet foods and drinks can become more common with age due to enamel wear and gum recession."
			},
			{
				"name": "Tooth Wear",
				"desc": "Over time, teeth can naturally wear down, becoming shorter and flatter, which can affect their function and appearance."
			},
			{
				"name": "Oral Cancer",
				"desc": "The risk of oral cancer increases with age, especially for those who have a history of tobacco or alcohol use."
			},
			{
				"name": "Root Decay",
				"desc": "Exposed tooth roots due to gum recession are more susceptible to decay, especially if proper oral hygiene is not maintained."
			},
			{
				"name": "Denture-Related Issues",
				"desc": "Many older adults wear dentures, which can lead to problems such as ill-fitting dentures, gum irritation, and sores."
			},
			{
				"name": "Reduced Saliva Production",
				"desc": "Aging can result in reduced saliva flow, which can increase the risk of cavities and make chewing and swallowing more difficult."
			},
			{
				"name": "Medication Side Effects",
				"desc": "Certain medications taken by older adults may have side effects that affect oral health, including dry mouth and gum enlargement."
			},
			{
				"name": "Mobility Issues",
				"desc": "Mobility issues can make it challenging for older individuals to maintain proper oral hygiene practices, increasing the risk of dental problems."
			},
			{
				"name": "Nutritional Challenges",
				"desc": "Poor nutrition due to dietary restrictions, difficulty chewing, or decreased appetite can impact oral health and overall well-being."
			}
		]
	},
	{
		name: QuestionNameEnum.IS_DIABETIC,
		prompt: 'Do you have Type-II Diabetes?',
		result: [
			{
				"name": "Gum Disease (Periodontal Disease)",
				"desc": "Diabetes can increase the risk of gum disease. Elevated blood sugar levels can lead to inflammation of the gums and impaired ability to fight infections. Gum disease can progress more rapidly and become more severe in individuals with diabetes."
			},
			{
				"name": "Delayed Healing",
				"desc": "Diabetes can slow down the body's natural healing processes. This is particularly concerning after dental procedures or oral surgery, as it may lead to delayed recovery and a higher risk of complications."
			},
			{
				"name": "Reduced Saliva Production",
				"desc": "Some people with diabetes experience dry mouth, a condition known as xerostomia. Reduced saliva production can increase the risk of tooth decay and oral infections since saliva helps neutralize acids and protect teeth."
			},
			{
				"name": "Thrush (Candidiasis)",
				"desc": "People with diabetes are more susceptible to oral fungal infections like thrush. High blood sugar levels create an ideal environment for the growth of the Candida fungus in the mouth, leading to white patches on the tongue and other oral tissues."
			},
			{
				"name": "Taste Alterations",
				"desc": "Diabetes can cause alterations in taste perceptions. Some individuals may experience a persistent metallic or bitter taste in the mouth, which can affect their enjoyment of food and beverages."
			},
			{
				"name": "Tooth Decay",
				"desc": "High blood sugar levels in diabetes can contribute to tooth decay. Elevated glucose levels provide an energy source for harmful oral bacteria, leading to the production of acids that erode tooth enamel."
			},
			{
				"name": "Increased Risk of Infections",
				"desc": "Poorly controlled diabetes weakens the immune system, making individuals more vulnerable to infections. This includes oral infections like gum disease and abscesses, which can have serious consequences for dental health."
			},
			{
				"name": "Altered Wound Healing",
				"desc": "Diabetes can alter the body's ability to heal wounds, including wounds in the mouth. This can lead to delayed recovery after oral surgeries or injuries."
			},
			{
				"name": "Difficulty Controlling Blood Sugar",
				"desc": "Pain or discomfort from oral health issues can make it challenging for individuals with diabetes to maintain stable blood sugar levels. Dental problems can affect the ability to eat well and manage insulin or medications effectively."
			},
			{
				"name": "Increased Risk of Tooth Loss",
				"desc": "Due to the combined effects of gum disease, tooth decay, delayed healing, and compromised immune function, individuals with diabetes have a higher risk of tooth loss compared to those without the condition."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_MEDICATED,
		prompt: 'Do you take at least 3 medications?',
		result: [
			{
				"name": "Dry Mouth (Xerostomia)",
				"desc": "Many medications, including some common ones, can cause dry mouth as a side effect. Dry mouth reduces saliva production, increasing the risk of tooth decay, gum disease, and oral discomfort."
			},
			{
				"name": "Gingival Overgrowth",
				"desc": "Certain medications, such as anticonvulsants, calcium channel blockers, and immunosuppressants, may lead to gingival overgrowth or enlargement of the gum tissues. This condition can make proper oral hygiene more challenging and increase the risk of gum disease."
			},
			{
				"name": "Candidiasis (Oral Thrush)",
				"desc": "Some medications, particularly corticosteroids and antibiotics, can disrupt the balance of oral microorganisms, allowing the overgrowth of Candida yeast in the mouth, leading to oral thrush, a fungal infection."
			},
			{
				"name": "Increased Risk of Bleeding",
				"desc": "Blood-thinning medications (anticoagulants) and certain antiplatelet drugs may increase the risk of bleeding during dental procedures, including routine cleanings and extractions. Dentists need to be aware of these medications to provide safe care."
			},
			{
				"name": "Altered Taste Sensation",
				"desc": "Some medications can cause changes in taste perception, leading to a metallic or unpleasant taste in the mouth. This can affect a person's appetite and overall enjoyment of food."
			},
			{
				"name": "Tooth Decay and Erosion",
				"desc": "Medications that contain sugar or have acidic properties (e.g., liquid medications) can contribute to tooth decay and enamel erosion if not properly managed. Rinsing the mouth after taking such medications can help mitigate this risk."
			},
			{
				"name": "Oral Ulcers",
				"desc": "Certain medications, including some used in chemotherapy, can lead to the development of oral ulcers or sores in the mouth. These can be painful and require special oral care."
			},
			{
				"name": "Reduced Immune Response",
				"desc": "Immunosuppressive medications can weaken the body's immune response, making it more susceptible to infections in the oral cavity, including gum infections and abscesses."
			},
			{
				"name": "Osteonecrosis of the Jaw",
				"desc": "Some medications, particularly certain types of bisphosphonates used to treat osteoporosis and cancer, are associated with a rare condition called osteonecrosis of the jaw (ONJ). ONJ can lead to jawbone deterioration and requires careful dental management."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_VASCULAR_ISSUE,
		prompt: 'Have you ever had a heart attack or stroke?',
		result: [
			{
				"name": "Oral Infections",
				"desc": "Reduced ability to maintain proper oral hygiene following a stroke or heart attack may lead to an increased risk of oral infections, including gum disease and tooth decay."
			},
			{
				"name": "Dry Mouth (Xerostomia)",
				"desc": "Some medications prescribed after a stroke or heart attack may cause dry mouth, reducing saliva production and increasing the risk of cavities and gum problems."
			},
			{
				"name": "Difficulty Swallowing (Dysphagia)",
				"desc": "Dysphagia, which can result from a stroke or heart attack, may lead to challenges in chewing and swallowing food, potentially affecting dietary choices and oral health."
			},
			{
				"name": "Oral Medications",
				"desc": "Patients may be prescribed various medications, and some of these medications can have side effects that impact oral health, such as bleeding gums or changes in taste perception."
			},
			{
				"name": "Poor Nutrition",
				"desc": "Following a stroke or heart attack, individuals may have dietary restrictions or difficulties in maintaining a balanced diet, which can affect oral health and overall well-being."
			},
			{
				"name": "Limited Mobility",
				"desc": "Physical limitations resulting from a stroke may affect a person's ability to perform proper oral hygiene routines, increasing the risk of dental problems."
			},
			{
				"name": "Communication Challenges",
				"desc": "Speech and communication difficulties after a stroke can lead to decreased verbal communication with dental professionals, potentially hindering oral health assessments and care."
			},
			{
				"name": "Blood Thinners",
				"desc": "Some patients post-stroke or heart attack may be prescribed blood-thinning medications, which can increase the risk of bleeding during dental procedures."
			},
			{
				"name": "Stress",
				"desc": "The emotional and psychological stress associated with a stroke or heart attack may contribute to bruxism (teeth grinding) or other stress-related oral health issues."
			},
			{
				"name": "Impact on Routine Dental Care",
				"desc": "Patients may postpone or neglect regular dental checkups and cleanings due to their health condition, which can result in undetected oral health problems."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_APNEA,
		prompt: 'Do you have sleep apnea?',
		result: [
			{
				"name": "Bruxism",
				"desc": "Sleep apnea may be linked to bruxism (teeth grinding), which can lead to tooth damage, sensitivity, and jaw pain."
			},
			{
				"name": "Dry Mouth (Xerostomia)",
				"desc": "Frequent pauses in breathing during sleep apnea can lead to dry mouth, reducing saliva production. Saliva helps protect teeth from decay and gum disease."
			},
			{
				"name": "Gum Disease (Periodontal Disease)",
				"desc": "The reduced oxygen levels in the blood during sleep apnea episodes may increase the risk of gum disease, which can lead to tooth loss and bone damage."
			},
			{
				"name": "Oral Breathing",
				"desc": "People with sleep apnea may breathe through their mouth during sleep. Chronic oral breathing can lead to dry mouth, bad breath, and an increased risk of dental problems."
			},
			{
				"name": "Tooth Decay",
				"desc": "Dry mouth and decreased saliva flow associated with sleep apnea can increase the risk of tooth decay."
			},
			{
				"name": "Impaired Healing",
				"desc": "Sleep apnea can affect the body's ability to heal effectively. This may impact recovery after dental procedures and increase the risk of complications."
			},
			{
				"name": "Temporomandibular Joint (TMJ) Disorders",
				"desc": "The clenching or grinding of teeth, often associated with sleep apnea, can contribute to TMJ disorders, leading to jaw pain and dysfunction."
			}
		]

		// answer: null
	},
	{
		name: QuestionNameEnum.IS_COFFEE_REGULAR,
		prompt: 'Do you drink coffee regularly?',
		result: [
			{
				"name": "Tooth Staining",
				"desc": "Coffee is a highly pigmented beverage that can cause yellow or brown stains on tooth enamel, leading to a dull or discolored smile."
			},
			{
				"name": "Enamel Erosion",
				"desc": "Coffee is acidic, and frequent consumption can weaken tooth enamel over time. Weakened enamel is more susceptible to tooth decay and sensitivity."
			},
			{
				"name": "Bad Breath (Halitosis)",
				"desc": "Coffee's strong odor can contribute to bad breath, and it can also reduce saliva production, which normally helps to cleanse the mouth of odor-causing bacteria."
			},
			{
				"name": "Dry Mouth",
				"desc": "Caffeine in coffee can contribute to dry mouth (xerostomia), reducing saliva flow. A dry mouth increases the risk of tooth decay and gum disease."
			},
			{
				"name": "Increased Risk of Stains from Other Sources",
				"desc": "Regular coffee consumption can make teeth more porous, increasing their susceptibility to staining from other foods and drinks, such as tea, red wine, and berries."
			},
			{
				"name": "Gum Irritation",
				"desc": "Coffee's acidity and heat can irritate the gums, leading to discomfort and potentially contributing to gum disease over time."
			},
			{
				"name": "Caffeine Addiction and Teeth Grinding",
				"desc": "Coffee contains caffeine, which can lead to addiction and heightened stress levels. Stress-related teeth grinding (bruxism) can cause tooth damage and jaw pain."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_GUM_DISEASE,
		prompt: 'Have you been diagnosed with gum disease?',
		result: [
			{
				"name": "Tooth Loss",
				"desc": "Untreated or severe gum disease (periodontitis) can lead to the gradual destruction of the supporting tissues and bone around teeth, eventually causing tooth loss."
			},
			{
				"name": "Bad Breath (Halitosis)",
				"desc": "Gum disease often results in persistent bad breath due to the presence of bacteria and the release of foul-smelling gases in the mouth."
			},
			{
				"name": "Gum Recession",
				"desc": "Advanced gum disease can cause the gums to recede or pull away from the teeth, exposing the tooth roots. This can lead to tooth sensitivity and an unattractive smile."
			},
			{
				"name": "Tooth Sensitivity",
				"desc": "Receding gums can expose the sensitive tooth roots, causing increased tooth sensitivity to temperature and certain foods and drinks."
			},
			{
				"name": "Pain and Discomfort",
				"desc": "Gum disease can cause pain, discomfort, and swelling in the gums, especially during eating or when brushing and flossing."
			},
			{
				"name": "Tooth Mobility",
				"desc": "As gum disease progresses, the supporting bone is compromised, leading to tooth mobility. Loose teeth can affect eating and speaking."
			},
			{
				"name": "Oral Infections",
				"desc": "Gum disease creates pockets or spaces between the gums and teeth, which can trap food particles and bacteria, leading to recurrent oral infections."
			},
			{
				"name": "Compromised Overall Health",
				"desc": "Emerging research suggests a link between gum disease and systemic health conditions such as heart disease, diabetes, and respiratory issues."
			},
			{
				"name": "Increased Dental Treatment Needs",
				"desc": "Patients with gum disease often require more frequent dental treatments, including scaling and root planing (deep cleaning), to manage and slow the progression of the disease."
			},
			{
				"name": "Cosmetic Concerns",
				"desc": "Gum disease can result in an uneven gumline and an unattractive smile, impacting a person's self-esteem and confidence."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_DENTURED_PARENTS,
		prompt: 'To your knowledge, do either of your parents have dentures?',
		result: [
			{
				"name": "Genetic Predisposition",
				"desc": "Children of parents with dentures may inherit a genetic predisposition to dental issues, such as tooth loss or gum disease, which can affect their own oral health."
			},
			{
				"name": "Poor Oral Hygiene Habits",
				"desc": "If parents with dentures have poor oral hygiene habits, they may not emphasize the importance of oral care to their children, potentially leading to neglect of dental hygiene routines."
			},
			{
				"name": "Lack of Preventive Care",
				"desc": "Growing up in an environment where parents do not receive regular dental checkups or preventive care may influence the children to adopt a similar approach, increasing their risk of dental problems."
			},
			{
				"name": "Nutritional Habits",
				"desc": "Dietary choices and eating habits within the family can impact the oral health of children. If parents with dentures have poor dietary choices, their children may be at risk of tooth decay and other issues."
			},
			{
				"name": "Limited Dental Guidance",
				"desc": "Children may receive limited guidance and education about proper dental care and healthy habits from parents with dentures, potentially leading to misinformation or misconceptions about oral health."
			},
			{
				"name": "Inherited Dental Conditions",
				"desc": "Certain dental conditions, such as malocclusion or enamel defects, may have a genetic component. Children of parents with dentures may be at a higher risk of inheriting such conditions."
			},
			{
				"name": "Psychological Impact",
				"desc": "Growing up in an environment where parents have dentures can sometimes lead to psychological impacts, such as dental anxiety or low self-esteem, which may affect a person's willingness to seek dental care."
			}
		]
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_SMOKER,
		prompt: 'Do you smoke anything regularly?',
		result: [
			{
				"name": "Gum Disease (Periodontal Disease)",
				"desc": "Smoking reduces blood flow to the gums, increasing the risk of gum disease, including gingivitis and more severe forms of periodontal disease."
			},
			{
				"name": "Tooth Decay",
				"desc": "Smoking can contribute to tooth decay by causing dry mouth, reducing saliva production, and increasing the risk of cavities."
			},
			{
				"name": "Staining and Discoloration",
				"desc": "Nicotine and tar in tobacco cause teeth to become stained and discolored, often turning them yellow or brown."
			},
			{
				"name": "Halitosis (Bad Breath)",
				"desc": "Smoking can lead to persistent bad breath due to tobacco residue in the mouth and an increased risk of gum disease."
			},
			{
				"name": "Delayed Healing",
				"desc": "Smoking interferes with the body's ability to heal, which can lead to slower recovery after dental procedures, including extractions and surgeries."
			},
			{
				"name": "Oral Cancer",
				"desc": "Tobacco use, including smoking, is a major cause of oral cancer, affecting the lips, tongue, mouth, and throat."
			},
			{
				"name": "Reduced Success of Dental Treatments",
				"desc": "Smokers may experience reduced success rates with dental treatments like implants and root canals due to compromised healing and a higher risk of complications."
			},
			{
				"name": "Reduced Taste and Smell Sensations",
				"desc": "Smoking can dull taste and smell sensations, affecting a person's ability to fully enjoy food and beverages."
			},
			{
				"name": "Decreased Blood Circulation",
				"desc": "Smoking narrows blood vessels, reducing blood circulation, which can negatively impact the health of the gums and the ability of oral tissues to repair themselves."
			},
			{
				"name": "Increased Risk of Dry Socket",
				"desc": "After tooth extraction, smokers are at a higher risk of developing dry socket, a painful condition where the blood clot in the socket is dislodged or dissolves prematurely."
			},
			{
				"name": "Tooth Loss",
				"desc": "Due to the increased risk of gum disease, tooth decay, and compromised healing, smokers are more likely to experience tooth loss compared to non-smokers."
			}
		],
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_CLEANED_RECENTLY,
		prompt: 'Have you had a dental cleaning within the last 3 years?',
		result: [
			{
				"name": "Gum Disease (Periodontal Disease)",
				"desc": "Without regular dental cleanings, plaque and tartar can accumulate, increasing the risk of gum disease. Gingivitis, an early stage of gum disease, can progress to more severe periodontal disease, leading to gum inflammation, bleeding, and potential tooth loss."
			},
			{
				"name": "Tooth Decay",
				"desc": "Plaque buildup on teeth can lead to tooth decay. Bacteria in plaque produce acids that can erode tooth enamel, causing cavities. Regular cleanings help remove plaque, reducing the risk of decay."
			},
			{
				"name": "Bad Breath (Halitosis)",
				"desc": "Untreated plaque and tartar can harbor odor-causing bacteria. Without cleanings, persistent bad breath (halitosis) can develop and may not be effectively addressed through regular oral hygiene practices."
			},
			{
				"name": "Staining and Discoloration",
				"desc": "Over time, without professional cleanings, teeth may become discolored and stained due to the accumulation of surface stains and tartar. This can affect the appearance of the smile."
			},
			{
				"name": "Reduced Detection of Oral Issues",
				"desc": "Regular dental cleanings often include comprehensive oral examinations. Not having these checkups can lead to undetected dental problems, such as early signs of oral cancer, cavities, or gum disease."
			},
			{
				"name": "Increased Treatment Costs",
				"desc": "Delaying dental cleanings can result in the need for more extensive treatments later on. This can lead to higher dental expenses due to the advanced state of dental issues that could have been prevented or treated earlier."
			},
			{
				"name": "Tooth Sensitivity",
				"desc": "Plaque and tartar can accumulate at the gumline, leading to gum recession and exposed tooth roots. This can cause increased tooth sensitivity to hot, cold, sweet, or acidic foods and beverages."
			},
			{
				"name": "Potential Tooth Loss",
				"desc": "Neglecting dental cleanings can contribute to advanced gum disease and tooth decay. In severe cases, it may lead to tooth loss, affecting the functionality and appearance of the smile."
			},
			{
				"name": "Oral Health Impact on Overall Health",
				"desc": "Poor oral health has been linked to systemic health issues, including cardiovascular disease and diabetes. Neglecting dental cleanings may increase the risk of these broader health problems."
			}
		]
		// answer: null
	},
]