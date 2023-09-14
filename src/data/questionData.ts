import { IHistoryData } from '@/components/MultiStep';

export enum IdentityNameEnum {
	ID_EMAIL = 'email',
	ID_FIRST_NAME = 'firstName',
	ID_LAST_NAME = 'lastName',
}
export type IdentityQuestion = {
	name: string;
	prompt: string;
	error: string;
	result: string | null;
	answer: string | null;
};
export const identityQuestions: IdentityQuestion[] = [
	{
		name: 'firstName',
		prompt: 'First Name is required...',
		error: 'First Name is required...',
		result: null,
		answer: null,
	},
	{
		name: 'lastName',
		prompt: 'Last Name is required...',
		error: 'Last Name is required...',
		result: null,
		answer: null,
	},
	{
		name: 'email',
		prompt: 'Where will we send your results?',
		error: 'Where will we send your results?',
		result: null,
		answer: null,
	},
];

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

export const answerIsAnIssueState: IHistoryData = {
	[QuestionNameEnum.IS_SMOKER]: true,
	[QuestionNameEnum.HAS_APNEA]: true,
	[QuestionNameEnum.IS_DIABETIC]: true,
	[QuestionNameEnum.IS_MEDICATED]: true,
	[QuestionNameEnum.HAS_GUM_DISEASE]: true,
	[QuestionNameEnum.IS_COFFEE_REGULAR]: true,
	[QuestionNameEnum.IS_OVER_SIXTYFIVE]: true,
	[QuestionNameEnum.HAS_VASCULAR_ISSUE]: true,
	[QuestionNameEnum.HAS_DENTURED_PARENTS]: true,
	[QuestionNameEnum.IS_CLEANED_RECENTLY]: false,
};

export interface HealthIssue {
	name: string;
	desc: string;
	isShown: boolean;
}
export type HistoryQuestion = {
	name: QuestionNameEnum;
	prompt: string;
	resultPrompt: string;
	result: HealthIssue[];
	answer: boolean | null;
};

export const historyQuestions: HistoryQuestion[] = [
	{
		name: QuestionNameEnum.IS_OVER_SIXTYFIVE,
		prompt: 'Are you over 65 years old?',
		resultPrompt: 'Over 65 years old',
		answer: null,
		result: [
			{
				name: 'Gum Disease (Periodontal Disease)',
				desc: 'As individuals age, they are at a higher risk of developing gum disease, which can lead to gum recession, tooth mobility, and tooth loss.',
				isShown: true,
			},
			{
				name: 'Tooth Decay (Cavities)',
				desc: 'Age-related factors, including reduced saliva production and changes in diet, can increase susceptibility to tooth decay.',
				isShown: true,
			},
			{
				name: 'Dry Mouth (Xerostomia)',
				desc: 'Many older adults take medications that can cause dry mouth, which increases the risk of cavities and gum problems.',
				isShown: true,
			},
			{
				name: 'Tooth Sensitivity',
				desc: 'Tooth sensitivity to hot, cold, or sweet foods and drinks can become more common with age due to enamel wear and gum recession.',
				isShown: true,
			},
			{
				name: 'Tooth Wear',
				desc: 'Over time, teeth can naturally wear down, becoming shorter and flatter, which can affect their function and appearance.',
				isShown: true,
			},
			{
				name: 'Oral Cancer',
				desc: 'The risk of oral cancer increases with age, especially for those who have a history of tobacco or alcohol use.',
				isShown: true,
			},
			{
				name: 'Root Decay',
				desc: 'Exposed tooth roots due to gum recession are more susceptible to decay, especially if proper oral hygiene is not maintained.',
				isShown: true,
			},
			{
				name: 'Denture-Related Issues',
				desc: 'Many older adults wear dentures, which can lead to problems such as ill-fitting dentures, gum irritation, and sores.',
				isShown: true,
			},
			{
				name: 'Reduced Saliva Production',
				desc: 'Aging can result in reduced saliva flow, which can increase the risk of cavities and make chewing and swallowing more difficult.',
				isShown: true,
			},
			{
				name: 'Medication Side Effects',
				desc: 'Certain medications taken by older adults may have side effects that affect oral health, including dry mouth and gum enlargement.',
				isShown: true,
			},
			{
				name: 'Mobility Issues',
				desc: 'Mobility issues can make it challenging for older individuals to maintain proper oral hygiene practices, increasing the risk of dental problems.',
				isShown: true,
			},
			{
				name: 'Nutritional Challenges',
				desc: 'Poor nutrition due to dietary restrictions, difficulty chewing, or decreased appetite can impact oral health and overall well-being.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.IS_DIABETIC,
		prompt: 'Do you have Type-II Diabetes?',
		resultPrompt: 'Type-II Diabetes',
		answer: null,
		result: [
			{
				name: 'Gum Disease (Periodontal Disease)',
				desc: 'Diabetes can increase the risk of gum disease. Elevated blood sugar levels can lead to inflammation of the gums and impaired ability to fight infections. Gum disease can progress more rapidly and become more severe in individuals with diabetes.',
				isShown: true,
			},
			{
				name: 'Delayed Healing',
				desc: "Diabetes can slow down the body's natural healing processes. This is particularly concerning after dental procedures or oral surgery, as it may lead to delayed recovery and a higher risk of complications.",
				isShown: true,
			},
			{
				name: 'Reduced Saliva Production',
				desc: 'Some people with diabetes experience dry mouth, a condition known as xerostomia. Reduced saliva production can increase the risk of tooth decay and oral infections since saliva helps neutralize acids and protect teeth.',
				isShown: true,
			},
			{
				name: 'Thrush (Candidiasis)',
				desc: 'People with diabetes are more susceptible to oral fungal infections like thrush. High blood sugar levels create an ideal environment for the growth of the Candida fungus in the mouth, leading to white patches on the tongue and other oral tissues.',
				isShown: true,
			},
			{
				name: 'Taste Alterations',
				desc: 'Diabetes can cause alterations in taste perceptions. Some individuals may experience a persistent metallic or bitter taste in the mouth, which can affect their enjoyment of food and beverages.',
				isShown: true,
			},
			{
				name: 'Tooth Decay',
				desc: 'High blood sugar levels in diabetes can contribute to tooth decay. Elevated glucose levels provide an energy source for harmful oral bacteria, leading to the production of acids that erode tooth enamel.',
				isShown: true,
			},
			{
				name: 'Increased Risk of Infections',
				desc: 'Poorly controlled diabetes weakens the immune system, making individuals more vulnerable to infections. This includes oral infections like gum disease and abscesses, which can have serious consequences for dental health.',
				isShown: true,
			},
			{
				name: 'Altered Wound Healing',
				desc: "Diabetes can alter the body's ability to heal wounds, including wounds in the mouth. This can lead to delayed recovery after oral surgeries or injuries.",
				isShown: true,
			},
			{
				name: 'Difficulty Controlling Blood Sugar',
				desc: 'Pain or discomfort from oral health issues can make it challenging for individuals with diabetes to maintain stable blood sugar levels. Dental problems can affect the ability to eat well and manage insulin or medications effectively.',
				isShown: true,
			},
			{
				name: 'Increased Risk of Tooth Loss',
				desc: 'Due to the combined effects of gum disease, tooth decay, delayed healing, and compromised immune function, individuals with diabetes have a higher risk of tooth loss compared to those without the condition.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.IS_MEDICATED,
		prompt: 'Do you take at least 3 medications?',
		resultPrompt: 'Three or more medications',
		answer: null,
		result: [
			{
				name: 'Dry Mouth (Xerostomia)',
				desc: 'Many medications, including some common ones, can cause dry mouth as a side effect. Dry mouth reduces saliva production, increasing the risk of tooth decay, gum disease, and oral discomfort.',
				isShown: true,
			},
			{
				name: 'Gingival Overgrowth',
				desc: 'Certain medications, such as anticonvulsants, calcium channel blockers, and immunosuppressants, may lead to gingival overgrowth or enlargement of the gum tissues. This condition can make proper oral hygiene more challenging and increase the risk of gum disease.',
				isShown: true,
			},
			{
				name: 'Candidiasis (Oral Thrush)',
				desc: 'Some medications, particularly corticosteroids and antibiotics, can disrupt the balance of oral microorganisms, allowing the overgrowth of Candida yeast in the mouth, leading to oral thrush, a fungal infection.',
				isShown: true,
			},
			{
				name: 'Increased Risk of Bleeding',
				desc: 'Blood-thinning medications (anticoagulants) and certain antiplatelet drugs may increase the risk of bleeding during dental procedures, including routine cleanings and extractions. Dentists need to be aware of these medications to provide safe care.',
				isShown: true,
			},
			{
				name: 'Altered Taste Sensation',
				desc: "Some medications can cause changes in taste perception, leading to a metallic or unpleasant taste in the mouth. This can affect a person's appetite and overall enjoyment of food.",
				isShown: true,
			},
			{
				name: 'Tooth Decay and Erosion',
				desc: 'Medications that contain sugar or have acidic properties (e.g., liquid medications) can contribute to tooth decay and enamel erosion if not properly managed. Rinsing the mouth after taking such medications can help mitigate this risk.',
				isShown: true,
			},
			{
				name: 'Oral Ulcers',
				desc: 'Certain medications, including some used in chemotherapy, can lead to the development of oral ulcers or sores in the mouth. These can be painful and require special oral care.',
				isShown: true,
			},
			{
				name: 'Reduced Immune Response',
				desc: "Immunosuppressive medications can weaken the body's immune response, making it more susceptible to infections in the oral cavity, including gum infections and abscesses.",
				isShown: true,
			},
			{
				name: 'Osteonecrosis of the Jaw',
				desc: 'Some medications, particularly certain types of bisphosphonates used to treat osteoporosis and cancer, are associated with a rare condition called osteonecrosis of the jaw (ONJ). ONJ can lead to jawbone deterioration and requires careful dental management.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.HAS_VASCULAR_ISSUE,
		prompt: 'Have you ever had a heart attack or stroke?',
		resultPrompt: 'Heart attack or stroke',
		answer: null,
		result: [
			{
				name: 'Oral Infections',
				desc: 'Reduced ability to maintain proper oral hygiene following a stroke or heart attack may lead to an increased risk of oral infections, including gum disease and tooth decay.',
				isShown: true,
			},
			{
				name: 'Dry Mouth (Xerostomia)',
				desc: 'Some medications prescribed after a stroke or heart attack may cause dry mouth, reducing saliva production and increasing the risk of cavities and gum problems.',
				isShown: true,
			},
			{
				name: 'Difficulty Swallowing (Dysphagia)',
				desc: 'Dysphagia, which can result from a stroke or heart attack, may lead to challenges in chewing and swallowing food, potentially affecting dietary choices and oral health.',
				isShown: true,
			},
			{
				name: 'Oral Medications',
				desc: 'Patients may be prescribed various medications, and some of these medications can have side effects that impact oral health, such as bleeding gums or changes in taste perception.',
				isShown: true,
			},
			{
				name: 'Poor Nutrition',
				desc: 'Following a stroke or heart attack, individuals may have dietary restrictions or difficulties in maintaining a balanced diet, which can affect oral health and overall well-being.',
				isShown: true,
			},
			{
				name: 'Limited Mobility',
				desc: "Physical limitations resulting from a stroke may affect a person's ability to perform proper oral hygiene routines, increasing the risk of dental problems.",
				isShown: true,
			},
			{
				name: 'Communication Challenges',
				desc: 'Speech and communication difficulties after a stroke can lead to decreased verbal communication with dental professionals, potentially hindering oral health assessments and care.',
				isShown: true,
			},
			{
				name: 'Blood Thinners',
				desc: 'Some patients post-stroke or heart attack may be prescribed blood-thinning medications, which can increase the risk of bleeding during dental procedures.',
				isShown: true,
			},
			{
				name: 'Stress',
				desc: 'The emotional and psychological stress associated with a stroke or heart attack may contribute to bruxism (teeth grinding) or other stress-related oral health issues.',
				isShown: true,
			},
			{
				name: 'Impact on Routine Dental Care',
				desc: 'Patients may postpone or neglect regular dental checkups and cleanings due to their health condition, which can result in undetected oral health problems.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.HAS_APNEA,
		prompt: 'Do you have sleep apnea?',
		resultPrompt: 'Effects of sleep apnea',
		answer: null,
		result: [
			{
				name: 'Bruxism',
				desc: 'Sleep apnea may be linked to bruxism (teeth grinding), which can lead to tooth damage, sensitivity, and jaw pain.',
				isShown: true,
			},
			{
				name: 'Dry Mouth (Xerostomia)',
				desc: 'Frequent pauses in breathing during sleep apnea can lead to dry mouth, reducing saliva production. Saliva helps protect teeth from decay and gum disease.',
				isShown: true,
			},
			{
				name: 'Gum Disease (Periodontal Disease)',
				desc: 'The reduced oxygen levels in the blood during sleep apnea episodes may increase the risk of gum disease, which can lead to tooth loss and bone damage.',
				isShown: true,
			},
			{
				name: 'Oral Breathing',
				desc: 'People with sleep apnea may breathe through their mouth during sleep. Chronic oral breathing can lead to dry mouth, bad breath, and an increased risk of dental problems.',
				isShown: true,
			},
			{
				name: 'Tooth Decay',
				desc: 'Dry mouth and decreased saliva flow associated with sleep apnea can increase the risk of tooth decay.',
				isShown: true,
			},
			{
				name: 'Impaired Healing',
				desc: "Sleep apnea can affect the body's ability to heal effectively. This may impact recovery after dental procedures and increase the risk of complications.",
				isShown: true,
			},
			{
				name: 'Temporomandibular Joint (TMJ) Disorders',
				desc: 'The clenching or grinding of teeth, often associated with sleep apnea, can contribute to TMJ disorders, leading to jaw pain and dysfunction.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.IS_COFFEE_REGULAR,
		prompt: 'Do you drink coffee regularly?',
		resultPrompt: 'Drinking coffee regularly',
		answer: null,
		result: [
			{
				name: 'Tooth Staining',
				desc: 'Coffee is a highly pigmented beverage that can cause yellow or brown stains on tooth enamel, leading to a dull or discolored smile.',
				isShown: true,
			},
			{
				name: 'Enamel Erosion',
				desc: 'Coffee is acidic, and frequent consumption can weaken tooth enamel over time. Weakened enamel is more susceptible to tooth decay and sensitivity.',
				isShown: true,
			},
			{
				name: 'Bad Breath (Halitosis)',
				desc: "Coffee's strong odor can contribute to bad breath, and it can also reduce saliva production, which normally helps to cleanse the mouth of odor-causing bacteria.",
				isShown: true,
			},
			{
				name: 'Dry Mouth',
				desc: 'Caffeine in coffee can contribute to dry mouth (xerostomia), reducing saliva flow. A dry mouth increases the risk of tooth decay and gum disease.',
				isShown: true,
			},
			{
				name: 'Increased Risk of Stains from Other Sources',
				desc: 'Regular coffee consumption can make teeth more porous, increasing their susceptibility to staining from other foods and drinks, such as tea, red wine, and berries.',
				isShown: true,
			},
			{
				name: 'Gum Irritation',
				desc: "Coffee's acidity and heat can irritate the gums, leading to discomfort and potentially contributing to gum disease over time.",
				isShown: true,
			},
			{
				name: 'Caffeine Addiction and Teeth Grinding',
				desc: 'Coffee contains caffeine, which can lead to addiction and heightened stress levels. Stress-related teeth grinding (bruxism) can cause tooth damage and jaw pain.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.HAS_GUM_DISEASE,
		prompt: 'Have you been diagnosed with gum disease?',
		resultPrompt: 'Diagnosed Gum Disease',
		answer: null,
		result: [
			{
				name: 'Tooth Loss',
				desc: 'Untreated or severe gum disease (periodontitis) can lead to the gradual destruction of the supporting tissues and bone around teeth, eventually causing tooth loss.',
				isShown: true,
			},
			{
				name: 'Bad Breath (Halitosis)',
				desc: 'Gum disease often results in persistent bad breath due to the presence of bacteria and the release of foul-smelling gases in the mouth.',
				isShown: true,
			},
			{
				name: 'Gum Recession',
				desc: 'Advanced gum disease can cause the gums to recede or pull away from the teeth, exposing the tooth roots. This can lead to tooth sensitivity and an unattractive smile.',
				isShown: true,
			},
			{
				name: 'Tooth Sensitivity',
				desc: 'Receding gums can expose the sensitive tooth roots, causing increased tooth sensitivity to temperature and certain foods and drinks.',
				isShown: true,
			},
			{
				name: 'Pain and Discomfort',
				desc: 'Gum disease can cause pain, discomfort, and swelling in the gums, especially during eating or when brushing and flossing.',
				isShown: true,
			},
			{
				name: 'Tooth Mobility',
				desc: 'As gum disease progresses, the supporting bone is compromised, leading to tooth mobility. Loose teeth can affect eating and speaking.',
				isShown: true,
			},
			{
				name: 'Oral Infections',
				desc: 'Gum disease creates pockets or spaces between the gums and teeth, which can trap food particles and bacteria, leading to recurrent oral infections.',
				isShown: true,
			},
			{
				name: 'Compromised Overall Health',
				desc: 'Emerging research suggests a link between gum disease and systemic health conditions such as heart disease, diabetes, and respiratory issues.',
				isShown: true,
			},
			{
				name: 'Increased Dental Treatment Needs',
				desc: 'Patients with gum disease often require more frequent dental treatments, including scaling and root planing (deep cleaning), to manage and slow the progression of the disease.',
				isShown: true,
			},
			{
				name: 'Cosmetic Concerns',
				desc: "Gum disease can result in an uneven gumline and an unattractive smile, impacting a person's self-esteem and confidence.",
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.HAS_DENTURED_PARENTS,
		prompt: 'To your knowledge, do either of your parents have dentures?',
		resultPrompt: 'Parents with dentures',
		answer: null,
		result: [
			{
				name: 'Genetic Predisposition',
				desc: 'Children of parents with dentures may inherit a genetic predisposition to dental issues, such as tooth loss or gum disease, which can affect their own oral health.',
				isShown: true,
			},
			{
				name: 'Poor Oral Hygiene Habits',
				desc: 'If parents with dentures have poor oral hygiene habits, they may not emphasize the importance of oral care to their children, potentially leading to neglect of dental hygiene routines.',
				isShown: true,
			},
			{
				name: 'Lack of Preventive Care',
				desc: 'Growing up in an environment where parents do not receive regular dental checkups or preventive care may influence the children to adopt a similar approach, increasing their risk of dental problems.',
				isShown: true,
			},
			{
				name: 'Nutritional Habits',
				desc: 'Dietary choices and eating habits within the family can impact the oral health of children. If parents with dentures have poor dietary choices, their children may be at risk of tooth decay and other issues.',
				isShown: true,
			},
			{
				name: 'Limited Dental Guidance',
				desc: 'Children may receive limited guidance and education about proper dental care and healthy habits from parents with dentures, potentially leading to misinformation or misconceptions about oral health.',
				isShown: true,
			},
			{
				name: 'Inherited Dental Conditions',
				desc: 'Certain dental conditions, such as malocclusion or enamel defects, may have a genetic component. Children of parents with dentures may be at a higher risk of inheriting such conditions.',
				isShown: true,
			},
			{
				name: 'Psychological Impact',
				desc: "Growing up in an environment where parents have dentures can sometimes lead to psychological impacts, such as dental anxiety or low self-esteem, which may affect a person's willingness to seek dental care.",
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.IS_SMOKER,
		prompt: 'Do you smoke tobacco regularly?',
		resultPrompt: 'Smoking tobacco regularly',
		answer: null,
		result: [
			{
				name: 'Gum Disease (Periodontal Disease)',
				desc: 'Smoking reduces blood flow to the gums, increasing the risk of gum disease, including gingivitis and more severe forms of periodontal disease.',
				isShown: true,
			},
			{
				name: 'Tooth Decay',
				desc: 'Smoking can contribute to tooth decay by causing dry mouth, reducing saliva production, and increasing the risk of cavities.',
				isShown: true,
			},
			{
				name: 'Staining and Discoloration',
				desc: 'Nicotine and tar in tobacco cause teeth to become stained and discolored, often turning them yellow or brown.',
				isShown: true,
			},
			{
				name: 'Halitosis (Bad Breath)',
				desc: 'Smoking can lead to persistent bad breath due to tobacco residue in the mouth and an increased risk of gum disease.',
				isShown: true,
			},
			{
				name: 'Delayed Healing',
				desc: "Smoking interferes with the body's ability to heal, which can lead to slower recovery after dental procedures, including extractions and surgeries.",
				isShown: true,
			},
			{
				name: 'Oral Cancer',
				desc: 'Tobacco use, including smoking, is a major cause of oral cancer, affecting the lips, tongue, mouth, and throat.',
				isShown: true,
			},
			{
				name: 'Reduced Success of Dental Treatments',
				desc: 'Smokers may experience reduced success rates with dental treatments like implants and root canals due to compromised healing and a higher risk of complications.',
				isShown: true,
			},
			{
				name: 'Reduced Taste and Smell Sensations',
				desc: "Smoking can dull taste and smell sensations, affecting a person's ability to fully enjoy food and beverages.",
				isShown: true,
			},
			{
				name: 'Decreased Blood Circulation',
				desc: 'Smoking narrows blood vessels, reducing blood circulation, which can negatively impact the health of the gums and the ability of oral tissues to repair themselves.',
				isShown: true,
			},
			{
				name: 'Increased Risk of Dry Socket',
				desc: 'After tooth extraction, smokers are at a higher risk of developing dry socket, a painful condition where the blood clot in the socket is dislodged or dissolves prematurely.',
				isShown: true,
			},
			{
				name: 'Tooth Loss',
				desc: 'Due to the increased risk of gum disease, tooth decay, and compromised healing, smokers are more likely to experience tooth loss compared to non-smokers.',
				isShown: true,
			},
		],
	},
	{
		name: QuestionNameEnum.IS_CLEANED_RECENTLY,
		prompt: 'Have you had a dental cleaning within the last 3 years?',
		resultPrompt: 'Missing dental cleanings',
		answer: null,
		result: [
			{
				name: 'Gum Disease (Periodontal Disease)',
				desc: 'Without regular dental cleanings, plaque and tartar can accumulate, increasing the risk of gum disease. Gingivitis, an early stage of gum disease, can progress to more severe periodontal disease, leading to gum inflammation, bleeding, and potential tooth loss.',
				isShown: true,
			},
			{
				name: 'Tooth Decay',
				desc: 'Plaque buildup on teeth can lead to tooth decay. Bacteria in plaque produce acids that can erode tooth enamel, causing cavities. Regular cleanings help remove plaque, reducing the risk of decay.',
				isShown: true,
			},
			{
				name: 'Bad Breath (Halitosis)',
				desc: 'Untreated plaque and tartar can harbor odor-causing bacteria. Without cleanings, persistent bad breath (halitosis) can develop and may not be effectively addressed through regular oral hygiene practices.',
				isShown: true,
			},
			{
				name: 'Staining and Discoloration',
				desc: 'Over time, without professional cleanings, teeth may become discolored and stained due to the accumulation of surface stains and tartar. This can affect the appearance of the smile.',
				isShown: true,
			},
			{
				name: 'Reduced Detection of Oral Issues',
				desc: 'Regular dental cleanings often include comprehensive oral examinations. Not having these checkups can lead to undetected dental problems, such as early signs of oral cancer, cavities, or gum disease.',
				isShown: true,
			},
			{
				name: 'Increased Treatment Costs',
				desc: 'Delaying dental cleanings can result in the need for more extensive treatments later on. This can lead to higher dental expenses due to the advanced state of dental issues that could have been prevented or treated earlier.',
				isShown: true,
			},
			{
				name: 'Tooth Sensitivity',
				desc: 'Plaque and tartar can accumulate at the gumline, leading to gum recession and exposed tooth roots. This can cause increased tooth sensitivity to hot, cold, sweet, or acidic foods and beverages.',
				isShown: true,
			},
			{
				name: 'Potential Tooth Loss',
				desc: 'Neglecting dental cleanings can contribute to advanced gum disease and tooth decay. In severe cases, it may lead to tooth loss, affecting the functionality and appearance of the smile.',
				isShown: true,
			},
			{
				name: 'Oral Health Impact on Overall Health',
				desc: 'Poor oral health has been linked to systemic health issues, including cardiovascular disease and diabetes. Neglecting dental cleanings may increase the risk of these broader health problems.',
				isShown: true,
			},
		],
	},
];

//=== CHAT GPT PROMPT ===

// From the perspective of a dentist,
// what are the associated risks to the dental health of a person who <VAR>?
// Please list these risks as an array of objects defined as
// {name: string, desc: string} in JSON format
// where 'name' is the name of the risk
// and 'desc' is the description of the risk to your oral health.
