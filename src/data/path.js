import { origin } from './index';

export const path = {
	truth: 'The Path Leading to the Cessation of Suffering',
	quotes: [
		{
			text: 'This is the noble truth of the practice that leads to the cessation of suffering: It is simply this noble eightfold path.',
			reference: 'SN 56.11'
		}
	],
	seeMore: ['SN 45.8', 'MN 117', 'SN 45.49'],
	treeTitle: 'The Noble Eightfold Path',
	tree: [
		{
			id: 'P-1',
			text: 'Right View',
			references: ['MN 9', 'MN 41', 'SN 12.15', 'SN 45.1', 'AN 9.13'],
			elaboration:
				'What is right view? Knowing about suffering, the origin of suffering, the cessation of suffering, and the practice that leads to the cessation of suffering. This is called right view.',
			children: [
				{
					id: 'P-1.1',
					text: 'The 4 Noble Truths',
					references: ['MN 9'],
					elaboration:
						'A noble disciple understands suffering, its origin, its cessation, and the practice that leads to its cessation. When they’ve done this, they’re defined as a noble disciple who has right view, whose view is correct, who has experiential confidence in the teaching, and has come to the true teaching.',
					spokenBy: 'Ven. Sariputta',
					children: [
						{
							id: 'P-1.1.1',
							text: 'Suffering',
							references: ['MN 9'],
							elaboration:
								'But what is suffering? What is its origin, its cessation, and the practice that leads to its cessation? Rebirth is suffering; old age is suffering; death is suffering; sorrow, lamentation, pain, sadness, and distress are suffering; association with the disliked is suffering; separation from the liked is suffering; not getting what you wish for is suffering. In brief, the five grasping aggregates are suffering. This is called suffering.',
							spokenBy: 'Ven. Sariputta'
						},
						{
							id: 'P-1.1.2',
							text: 'The origin of suffering',
							references: ['MN 9'],
							elaboration:
								'And what is the origin of suffering? It’s the craving that leads to future rebirth, mixed up with relishing and greed, looking for enjoyment in various different realms. That is, craving for sensual pleasures, craving for continued existence, and craving to end existence. This is called the origin of suffering.',
							spokenBy: 'Ven. Sariputta'
						},
						{
							id: 'P-1.1.3',
							text: 'The cessation of suffering',
							references: ['MN 9'],
							elaboration:
								'And what is the cessation of suffering? It’s the fading away and cessation of that very same craving with nothing left over; giving it away, letting it go, releasing it, and not adhering to it. This is called the cessation of suffering.',
							spokenBy: 'Ven. Sariputta'
						},
						{
							id: 'P-1.1.4',
							text: 'The path leading to the cessation of suffering',
							references: ['MN 9'],
							elaboration:
								'And what is the practice that leads to the cessation of suffering? It is simply this noble eightfold path. This is called the practice that leads to the cessation of suffering.',
							spokenBy: 'Ven. Sariputta'
						}
					]
				},
				{
					id: 'P-1.2',
					text: 'The unskillful and the skillful',
					references: ['MN 9'],
					elaboration:
						'A noble disciple understands the unskillful and its root, and the skillful and its root. When they’ve done this, they’re defined as a noble disciple who has right view, whose view is correct, who has experiential confidence in the teaching, and has come to the true teaching.',
					spokenBy: 'Ven. Sariputta',
					children: [
						{
							id: 'P-1.2.1',
							text: 'The unskillful',
							references: ['MN 9'],
							elaboration:
								'What is the unskillful? Killing living creatures, stealing, and sexual misconduct; speech that’s false, divisive, harsh, or nonsensical; and covetousness, ill will, and wrong view. This is called the unskillful.',
							spokenBy: 'Ven. Sariputta',
							children: [
								{
									id: 'P-1.2.1.1',
									text: 'Killing living creatures'
								},
								{
									id: 'P-1.2.1.2',
									text: 'Stealing'
								},
								{
									id: 'P-1.2.1.3',
									text: 'Sexual misconduct'
								},
								{
									id: 'P-1.2.1.4',
									text: 'False, divisive, harsh, or nonsensical speech'
								},
								{
									id: 'P-1.2.1.5',
									text: 'Covetousness'
								},
								{
									id: 'P-1.2.1.6',
									text: 'Ill-will'
								},
								{
									id: 'P-1.2.1.7',
									text: 'Wrong view'
								}
							]
						},
						{
							id: 'P-1.2.2',
							text: 'The root of the unskillful',
							references: ['MN 9'],
							elaboration:
								'What is the root of the unskillful? Greed, hate, and delusion. This is called the root of the unskillful.',
							spokenBy: 'Ven. Sariputta',
							children: [
								{
									id: 'P-1.2.2.1',
									text: 'Greed'
								},
								{
									id: 'P-1.2.2.2',
									text: 'Hatred'
								},
								{
									id: 'P-1.2.2.3',
									text: 'Delusion'
								}
							]
						},
						{
							id: 'P-1.2.3',
							text: 'The skillful',
							references: ['MN 9'],
							elaboration:
								'What is the skillful? Avoiding killing living creatures, stealing, and sexual misconduct; avoiding speech that’s false, divisive, harsh, or nonsensical; contentment, good will, and right view. This is called the skillful.',
							spokenBy: 'Ven. Sariputta',
							children: [
								{
									id: 'P-1.2.3.1',
									text: 'Avoiding killing living creatures'
								},
								{
									id: 'P-1.2.3.2',
									text: 'Avoiding stealing'
								},
								{
									id: 'P-1.2.3.3',
									text: 'Avoiding sexual misconduct'
								},
								{
									id: 'P-1.2.3.4',
									text: 'Avoiding false, divisive, harsh, or nonsensical speech'
								},
								{
									id: 'P-1.2.3.5',
									text: 'Contentment'
								},
								{
									id: 'P-1.2.3.6',
									text: 'Good-will'
								},
								{
									id: 'P-1.2.3.7',
									text: 'Right view'
								}
							]
						},
						{
							id: 'P-1.2.4',
							text: 'The root of the skillful',
							references: ['MN 9'],
							elaboration:
								'And what is the root of the skillful? Contentment, love, and understanding. This is called the root of the skillful.',
							spokenBy: 'Ven. Sariputta',
							children: [
								{
									id: 'P-1.2.4.1',
									text: 'Contentment'
								},
								{
									id: 'P-1.2.4.2',
									text: 'Love'
								},
								{
									id: 'P-1.2.4.3',
									text: 'Understanding'
								}
							]
						}
					]
				},
				{
					id: 'P-1.3',
					text: 'Fuel',
					references: ['SN 12.11', 'SN 12.63', 'MN 9'],
					elaboration:
						'There are these four fuels. They maintain sentient beings that have been born and help those that are about to be born. What four? Solid food, whether coarse or fine; contact is the second, mental intention the third, and consciousness the fourth. These are the four fuels that maintain sentient beings that have been born and help those that are about to be born.',
					children: [
						{
							id: 'P-1.3.1',
							text: 'Physical food',
							elaboration:
								'And how should you regard solid food? Suppose a couple who were husband and wife set out to cross a desert, taking limited supplies. They had an only child, dear and beloved. As the couple were crossing the desert their limited quantity of supplies would run out, and they’d still have the rest of the desert to cross. Then it would occur to that couple: ‘Our limited quantity of supplies has run out, and we still have the rest of the desert to cross. Why don’t we kill our only child, so dear and beloved, and prepare dried and spiced meat? Then we can make it across the desert by eating our child’s flesh. Let not all three perish.’ Then that couple would kill their only child, so dear and beloved, and prepare dried and spiced meat. They’d make it across the desert by eating their child’s flesh. And as they’d eat their child’s flesh, they’d beat their breasts and cry: ‘Where are you, our only child? Where are you, our only child?’ What do you think? Would they eat that food for fun, indulgence, adornment, or decoration? Wouldn’t they eat that food just so they could make it across the desert? I say that this is how you should regard solid food. When solid food is completely understood, desire for the five kinds of sensual stimulation is completely understood. When desire for the five kinds of sensual stimulation is completely understood, a noble disciple is bound by no fetter that might return them again to this world.',
							references: ['SN 12.63']
						},
						{
							id: 'P-1.3.2',
							text: 'Contact',
							elaboration:
								'And how should you regard contact as fuel? Suppose there was a flayed cow. If she stands by a wall, the creatures on the wall bite her. If she stands under a tree, the creatures in the tree bite her. If she stands in some water, the creatures in the water bite her. If she stands in the open, the creatures in the open bite her. Wherever that flayed cow stands, the creatures there would bite her. I say that this is how you should regard contact as fuel. When contact as fuel is completely understood, the three feelings are completely understood. When the three feelings are completely understood, a noble disciple has nothing further to do, I say.',
							references: ['SN 12.63']
						},
						{
							id: 'P-1.3.3',
							text: 'Mental intention',
							elaboration:
								'And how should you regard mental intention as fuel? Suppose there was a pit of glowing coals deeper than a man’s height, filled with glowing coals that neither flamed nor smoked. Then a person would come along who wants to live and doesn’t want to die, who wants to be happy and recoils from pain. Then two strong men would grab them by the arms and drag them towards the pit of glowing coals. Then that person’s intention, aim, and wish would be to get far away. Why is that? Because that person would think: ‘If I fall in that pit of glowing coals, that will result in my death or deadly pain.’ I say that this is how you should regard mental intention as fuel. When mental intention as fuel is completely understood, the three cravings are completely understood. When the three cravings are completely understood, a noble disciple has nothing further to do, I say.',
							references: ['SN 12.63']
						},
						{
							id: 'P-1.3.4',
							text: 'Consciousness',
							elaboration:
								'And how should you regard consciousness as fuel? Suppose they were to arrest a bandit, a criminal and present him to the king, saying: ‘Your Majesty, this is a bandit, a criminal. Punish him as you will.’ The king would say: ‘Go, my men, and strike this man in the morning with a hundred spears!’ The king’s men did as they were told. Then at midday the king would say: ‘My men, how is that man?’ ‘He’s still alive, Your Majesty.’ The king would say: ‘Go, my men, and strike this man in the middle of the day with a hundred spears!’ The king’s men did as they were told. Then late in the afternoon the king would say: ‘My men, how is that man?’ ‘He’s still alive, Your Majesty.’ The king would say: ‘Go, my men, and strike this man in the late afternoon with a hundred spears!’ The king’s men did as they were told. What do you think, mendicants? Would that man experience pain and distress from being struck with three hundred spears a day? I say that this is how you should regard consciousness as fuel. When consciousness as fuel is completely understood, name and form is completely understood. When name and form are completely understood, a noble disciple has nothing further to do, I say.',
							references: ['SN 12.63']
						}
					]
				},
				{
					id: 'P-1.4',
					text: 'Dependent Origination',
					references: ['SN 12.2', 'SN 12.15', 'MN 9'],
					elaboration:
						'What is dependent origination? Ignorance is a condition for volitional formations. Volitional formations are a condition for consciousness. Consciousness is a condition for mind and matter. Mind and matter are conditions for the six sense fields. The six sense fields are conditions for contact. Contact is a condition for feeling. Feeling is a condition for craving. Craving is a condition for grasping. Grasping is a condition for continued existence. Continued existence is a condition for rebirth. Rebirth is a condition for old age and death, sorrow, lamentation, pain, sadness, and distress to come to be. That is how this entire mass of suffering originates.',
					children: [...origin.tree]
				},
				{
					id: 'P-1.5',
					text: 'Defilement',
					references: ['MN 9'],
					elaboration:
						'A noble disciple understands defilement, its origin, its cessation, and the practice that leads to its cessation. When they’ve done this, they’re defined as a noble disciple who has right view, whose view is correct, who has experiential confidence in the teaching, and has come to the true teaching.',
					spokenBy: 'Ven. Sariputta',
					children: [
						{
							id: 'P-1.5.1',
							text: 'Sensual desire',
							references: ['MN 9'],
							elaboration:
								'But what is defilement? What is its origin, its cessation, and the practice that leads to its cessation? There are these three defilements. The defilements of sensuality, desire to be reborn, and ignorance. Defilement originates from ignorance. Defilement ceases when ignorance ceases. The practice that leads to the cessation of defilement is simply this noble eightfold path.',
							spokenBy: 'Ven. Sariputta'
						},
						{
							id: 'P-1.5.2',
							text: 'Desire to be reborn',
							references: ['MN 9'],
							elaboration:
								'But what is defilement? What is its origin, its cessation, and the practice that leads to its cessation? There are these three defilements. The defilements of sensuality, desire to be reborn, and ignorance. Defilement originates from ignorance. Defilement ceases when ignorance ceases. The practice that leads to the cessation of defilement is simply this noble eightfold path.',
							spokenBy: 'Ven. Sariputta'
						},
						{
							id: 'P-1.5.3',
							text: 'Ignorance',
							references: ['MN 9'],
							elaboration:
								'But what is defilement? What is its origin, its cessation, and the practice that leads to its cessation? There are these three defilements. The defilements of sensuality, desire to be reborn, and ignorance. Defilement originates from ignorance. Defilement ceases when ignorance ceases. The practice that leads to the cessation of defilement is simply this noble eightfold path.',
							spokenBy: 'Ven. Sariputta'
						}
					]
				},
				{
					id: 'P-1.6',
					text: 'An undistorted perspective',
					references: ['MN 41'],
					elaboration:
						'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’',
					children: [
						{
							id: 'P-1.6.1',
							text: 'There’s meaning in giving, sacrifice, or offerings',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						},
						{
							id: 'P-1.6.2',
							text: 'There’s fruit/result of good and bad deeds',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						},
						{
							id: 'P-1.6.3',
							text: 'There’s an afterlife',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						},
						{
							id: 'P-1.6.4',
							text: 'There’s obligation to mother and father',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						},
						{
							id: 'P-1.6.5',
							text: 'There’s beings who are reborn spontaneously',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						},
						{
							id: 'P-1.6.6',
							text: 'There’s well attained meditators who describe the afterlife after realizing it with their own insight',
							references: ['MN 41'],
							elaboration:
								'Right view, an undistorted perspective: ‘There is meaning in giving, sacrifice, and offerings. There are fruits and results of good and bad deeds. There is an afterlife. There is obligation to mother and father. There are beings reborn spontaneously. And there are ascetics and brahmins who are well attained and practiced, and who describe the afterlife after realizing it with their own insight.’'
						}
					]
				}
			]
		},
		{
			id: 'P-2',
			text: 'Right Intention',
			references: ['SN 45.8', 'MN 19', 'SN 14.12', 'ITI 87', 'ITI 110', 'MN 20'],
			elaboration:
				'What is right intention? It is the intention of renunciation, good will, and harmlessness. This is called right intention.',
			children: [
				{
					id: 'P-2.1',
					text: 'Renunciation',
					references: ['MN 19', 'SN 27'],
					elaboration:
						'As I meditated—diligent, keen, and resolute—a thought of renunciation arose. I understood: ‘This thought of renunciation has arisen in me. It doesn’t lead to hurting myself, hurting others, or hurting both. It nourishes wisdom, it’s on the side of freedom from anguish, and it leads to extinguishment.’ If I were to keep on thinking and considering this all night … all day … all night and day, I see no danger that would come from that.'
				},
				{
					id: 'P-2.2',
					text: 'Good will',
					references: ['MN 19'],
					elaboration:
						'As I meditated—diligent, keen, and resolute—a thought of good will arose. I understood: ‘This thought of good will has arisen in me. It doesn’t lead to hurting myself, hurting others, or hurting both. It nourishes wisdom, it’s on the side of freedom from anguish, and it leads to extinguishment.’ If I were to keep on thinking and considering this all night … all day … all night and day, I see no danger that would come from that.'
				},
				{
					id: 'P-2.3',
					text: 'Harmlessness',
					references: ['MN 19'],
					elaboration:
						'As I meditated—diligent, keen, and resolute—a thought of harmlessness arose. I understood: ‘This thought of harmlessness has arisen in me. It doesn’t lead to hurting myself, hurting others, or hurting both. It nourishes wisdom, it’s on the side of freedom from anguish, and it leads to extinguishment.’ If I were to keep on thinking and considering this all night … all day … all night and day, I see no danger that would come from that.'
				}
			]
		},
		{
			id: 'P-3',
			text: 'Right Speech',
			references: [
				'SN 45.8',
				'AN 10.176',
				'MN 41',
				'MN 139',
				'MN 58',
				'AN 4.183',
				'AN 5.198'
			],
			elaboration:
				'What is right speech? Avoiding speech that’s false, divisive, harsh, or nonsensical. This is called right speech.',
			children: [
				{
					id: 'P-3.1',
					text: 'Abstaining from false speech',
					elaboration:
						'It’s when a certain person gives up lying. They’re summoned to a council, an assembly, a family meeting, a guild, or to the royal court, and asked to bear witness: ‘Please, mister, say what you know.’ Not knowing, they say ‘I don’t know.’ Knowing, they say ‘I know.’ Not seeing, they say ‘I don’t see.’ And seeing, they say ‘I see.’ So they don’t deliberately lie for the sake of themselves or another, or for some trivial worldly reason. This is purity by way of speech.',
					references: ['AN 10.176', 'AN 8.40', 'ITI 25']
				},
				{
					id: 'P-3.2',
					text: 'Abstaining from divisive speech',
					elaboration:
						'They give up divisive speech. They don’t repeat in one place what they heard in another so as to divide people against each other. Instead, they reconcile those who are divided, supporting unity, delighting in harmony, loving harmony, speaking words that promote harmony. This is purity by way of speech.',
					references: ['AN 10.176', 'AN 8.40']
				},
				{
					id: 'P-3.3',
					text: 'Abstaining from harsh speech',
					elaboration:
						'They give up harsh speech. They speak in a way that’s mellow, pleasing to the ear, lovely, going to the heart, polite, likable and agreeable to the people. This is purity by way of speech.',
					references: ['AN 10.176', 'AN 8.40']
				},
				{
					id: 'P-3.4',
					text: 'Abstaining from nonsensical speech',
					elaboration:
						'They give up talking nonsense. Their words are timely, true, and meaningful, in line with the teaching and training. They say things at the right time which are valuable, reasonable, succinct, and beneficial. This is purity by way of speech.',
					references: ['AN 10.176', 'AN 8.40']
				}
			]
		},
		{
			id: 'P-4',
			text: 'Right Action',
			references: ['SN 45.8', 'MN 41', 'AN 8.39', 'AN 8.40', 'AN 10.176'],
			elaboration:
				'What is right action? Avoiding killing sentient beings, stealing, and sexual activity. This is called right action.',
			children: [
				{
					id: 'P-4.1',
					text: 'Abstaining from killing sentient beings',
					elaboration:
						'It’s when a certain person gives up killing living creatures. They renounce the rod and the sword. They’re scrupulous and kind, living full of compassion for all living beings. This is purity by way of body.',
					references: ['AN 10.176', 'AN 8.40', 'AN 4.264', 'DHP 129-145', 'SNP 2.14']
				},
				{
					id: 'P-4.2',
					text: 'Abstaining from stealing',
					elaboration:
						'They give up stealing. They don’t, with the intention to commit theft, take the wealth or belongings of others from village or wilderness. This is purity by way of body.',
					references: ['AN 10.176', 'AN 8.40']
				},
				{
					id: 'P-4.3',
					text: 'Abstaining from sexual misconduct',
					elaboration:
						'They give up sexual misconduct. They don’t have sexual relations with women who have their mother, father, both mother and father, brother, sister, relatives, or clan as guardian. They don’t have sexual relations with a woman who is protected on principle, or who has a husband, or whose violation is punishable by law, or even one who has been garlanded as a token of betrothal. This is purity by way of body.',
					references: ['AN 10.176', 'AN 8.40', 'SN 1.58', 'AN 7.50']
				}
			]
		},
		{
			id: 'P-5',
			text: 'Right Livelihood',
			references: ['SN 45.8', 'AN 5.177', 'MN 117'],
			elaboration:
				'What is right livelihood? It’s when a noble disciple gives up wrong livelihood and earns a living by right livelihood. This is called right livelihood.',
			children: [
				{
					id: 'P-5.1',
					text: 'For lay people',
					references: ['AN 5.177', 'AN 4.62', 'AN 5.41', 'AN 8.54'],
					elaboration:
						'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.',
					children: [
						{
							id: 'P-5.1.1',
							text: 'Refrain from trading in weapons',
							references: ['AN 5.177'],
							elaboration:
								'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.'
						},
						{
							id: 'P-5.1.2',
							text: 'Refrain from trading in sentient beings',
							references: ['AN 5.177'],
							elaboration:
								'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.'
						},
						{
							id: 'P-5.1.3',
							text: 'Refrain from trading in meat',
							references: ['AN 5.177'],
							elaboration:
								'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.'
						},
						{
							id: 'P-5.1.4',
							text: 'Refrain from trading in intoxicants',
							references: ['AN 5.177'],
							elaboration:
								'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.'
						},
						{
							id: 'P-5.1.5',
							text: 'Refrain from trading in poisons',
							references: ['AN 5.177'],
							elaboration:
								'A lay follower should not engage in these five trades. What five? Trade in weapons, sentient beings, meat, intoxicants, and poisons. A lay follower should not engage in these five trades.'
						}
					]
				},
				{
					id: 'P-5.2',
					text: 'For monks/nuns',
					references: ['MN 117', 'DN 2'],
					elaboration:
						'What is wrong livelihood? Deceit, flattery, hinting, and belittling, and using material possessions to chase after other material possessions. This is wrong livelihood.',
					children: [
						{
							id: 'P-5.2.1',
							text: 'Refrain from making predictions',
							references: ['DN 2'],
							elaboration:
								'There are some ascetics and brahmins who, while enjoying food given in faith, still earn a living by unworthy branches of knowledge, by wrong livelihood. This includes making predictions that the king will march forth or march back; or that our king will attack and the enemy king will retreat, or vice versa; or that our king will triumph and the enemy king will be defeated, or vice versa; and so there will be victory for one and defeat for the other. This includes making predictions that there will be an eclipse of the moon, or sun, or stars; that the sun, moon, and stars will be in conjunction or in opposition; that there will be a meteor shower, a fiery sky, an earthquake, thunder; that there will be a rising, a setting, a darkening, a brightening of the moon, sun, and stars. And it also includes making predictions about the results of all such phenomena. This includes predicting whether there will be plenty of rain or drought; plenty to eat or famine; an abundant harvest or a bad harvest; security or peril; sickness or health. They refrain from such unworthy branches of knowledge, such wrong livelihood.'
						},
						{
							id: 'P-5.2.2',
							text: 'Refrain from offering protective charms',
							references: ['DN 2'],
							elaboration:
								'There are some ascetics and brahmins who, while enjoying food given in faith, still earn a living by unworthy branches of knowledge, by wrong livelihood. This includes such fields as limb-reading, omenology, divining celestial portents, interpreting dreams, divining bodily marks, divining holes in cloth gnawed by mice, fire offerings, ladle offerings, offerings of husks, rice powder, rice, ghee, or oil; offerings from the mouth, blood sacrifices, palmistry; geomancy for building sites, fields, and cemeteries; exorcisms, earth magic, snake charming, poisons; the crafts of the scorpion, the rat, the bird, and the crow; prophesying life span, chanting for protection, and animal cries. This includes reading the marks of gems, cloth, clubs, swords, spears, arrows, weapons, women, men, boys, girls, male and female bondservants, elephants, horses, buffaloes, bulls, cows, goats, rams, chickens, quails, monitor lizards, rabbits, tortoises, or deer. They refrain from such unworthy branches of knowledge, such wrong livelihood.'
						},
						{
							id: 'P-5.2.3',
							text: 'Refrain from acting in a servile capacity for lay people',
							references: ['DN 2'],
							elaboration:
								'There are some ascetics and brahmins who, while enjoying food given in faith, still earn a living by unworthy branches of knowledge, by wrong livelihood. This includes making arrangements for giving and taking in marriage; for engagement and divorce; and for scattering rice inwards or outwards at the wedding ceremony. It also includes casting spells for good or bad luck, curses to prevent conception, bind the tongue, or lock the jaws; charms for the hands and ears; questioning a mirror, a girl, or a god as an oracle; worshiping the sun, worshiping the Great One, breathing fire, and invoking Siri, the goddess of luck. This includes rites for propitiation, for granting wishes, for ghosts, for the earth, for rain, for property settlement, and for preparing and consecrating house sites, and rites involving rinsing and bathing, and oblations. It also includes administering emetics, purgatives, expectorants, and phlegmagogues; administering ear-oils, eye restoratives, nasal medicine, ointments, and counter-ointments; surgery with needle and scalpel, treating children, prescribing root medicines, and binding on herbs. They refrain from such unworthy branches of knowledge, such wrong livelihood.'
						},
						{
							id: 'P-5.2.4',
							text: 'Refrain from other wrong livelihoods...',
							references: ['DN 2'],
							elaboration:
								'There are some ascetics and brahmins who, while enjoying food given in faith, still earn a living by unworthy branches of knowledge, by wrong livelihood. It also includes such occupations as computing, accounting, calculating, poetry, and cosmology. They refrain from such unworthy branches of knowledge, such wrong livelihood.'
						}
					]
				}
			]
		},
		{
			id: 'P-6',
			text: 'Right Effort',
			references: ['SN 49.1-12', 'AN 4.14', 'MN 117', 'MN 2'],
			elaboration:
				'There are these four right efforts. What four? It’s when a mendicant generates enthusiasm, tries, makes an effort, exerts the mind, and strives so that bad, unskillful qualities don’t arise; so that bad, unskillful qualities that have arisen are given up; so that skillful qualities arise; so that skillful qualities that have arisen remain, are not lost, but increase, mature, and are completed by development. These are the four right efforts.',
			children: [
				{
					id: 'P-6.1',
					text: 'Restrain unarisen unskillful states of mind',
					references: ['AN 4.14', 'MN 20'],
					elaboration:
						'And what is the effort to restrain? When a mendicant sees a sight with their eyes, they don’t get caught up in the features and details. If the faculty of sight were left unrestrained, bad unskillful qualities of desire and aversion would become overwhelming. For this reason, they practice restraint, protecting the faculty of sight, and achieving its restraint. When they hear a sound with their ears … When they smell an odor with their nose … When they taste a flavor with their tongue … When they feel a touch with their body … When they know a thought with their mind, they don’t get caught up in the features and details. If the faculty of mind were left unrestrained, bad unskillful qualities of desire and aversion would become overwhelming. For this reason, they practice restraint, protecting the faculty of mind, and achieving its restraint. This is called the effort to restrain.'
				},
				{
					id: 'P-6.2',
					text: 'Give up arisen unskillful states of mind',
					references: ['AN 4.14', 'AN 2.11-20'],
					elaboration:
						'And what is the effort to give up? It’s when a mendicant doesn’t tolerate a sensual, malicious, or cruel thought that’s arisen, but gives it up, gets rid of it, eliminates it, and obliterates it. They don’t tolerate any bad, unskillful qualities that have arisen, but give them up, get rid of them, eliminate them, and obliterate them. This is called the effort to give up.'
				},
				{
					id: 'P-6.3',
					text: 'Develop unarisen skillful states of mind',
					references: ['AN 4.14', 'AN 2.11-20'],
					elaboration:
						'And what is the effort to develop? It’s when a mendicant develops the awakening factors of mindfulness, investigation of principles, energy, rapture, tranquility, immersion, and equanimity, which rely on seclusion, fading away, and cessation, and ripen as letting go. This is called the effort to develop.'
				},
				{
					id: 'P-6.4',
					text: 'Preserve arisen skillful states of mind',
					references: ['AN 4.14', 'AN 2.11-20'],
					elaboration:
						'And what is the effort to preserve? It’s when a mendicant preserves a meditation subject that’s a fine foundation of immersion: the perception of a skeleton, a worm-infested corpse, a livid corpse, a split open corpse, or a bloated corpse. This is called the effort to preserve.'
				}
			]
		},
		{
			id: 'P-7',
			text: 'Right Mindfulness',
			references: ['MN 10', 'DN 22', 'SN 47'],
			elaboration:
				'What is right mindfulness? It’s when a mendicant meditates by observing an aspect of the body, feelings, mind, or principles—keen, aware, and mindful, rid of desire and aversion for the world. This is called right mindfulness.',
			children: [
				{
					id: 'P-7.1',
					text: 'Mindfulness of the body',
					references: ['MN 10', 'DN 22', 'MN 119', 'SN 43.1'],
					elaboration:
						'And how does a mendicant meditate observing an aspect of the body? It’s when a mendicant—gone to a wilderness, or to the root of a tree, or to an empty hut—sits down cross-legged, with their body straight, and focuses their mindfulness right there. Just mindful, they breathe in. Mindful, they breathe out. And so they meditate observing an aspect of the body internally, externally, and both internally and externally. They meditate observing the body as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that the body exists, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of the body.',
					children: [
						{
							id: 'P-7.1.1',
							text: 'Mindfulness of breathing',
							references: ['MN 118', 'MN 119', 'MN 10', 'DN 22', 'MN 62'],
							elaboration:
								'Mendicants, when mindfulness of breathing is developed and cultivated it is very fruitful and beneficial. Mindfulness of breathing, when developed and cultivated, fulfills the four kinds of mindfulness meditation. The four kinds of mindfulness meditation, when developed and cultivated, fulfill the seven awakening factors. And the seven awakening factors, when developed and cultivated, fulfill knowledge and freedom.',
							children: [
								{
									id: 'P-7.1.1.1',
									text: 'Mindfulness of long/heavy breaths',
									references: ['MN 118', 'MN 119', 'MN 10', 'DN 22'],
									elaboration:
										'And how is mindfulness of breathing developed and cultivated to be very fruitful and beneficial? It’s when a mendicant has gone to a wilderness, or to the root of a tree, or to an empty hut. They sit down cross-legged, with their body straight, and establish mindfulness right there. Just mindful, they breathe in. Mindful, they breathe out. When breathing in heavily they know: ‘I’m breathing in heavily.’ When breathing out heavily they know: ‘I’m breathing out heavily.’ When breathing in lightly they know: ‘I’m breathing in lightly.’ When breathing out lightly they know: ‘I’m breathing out lightly.’ They practice breathing in experiencing the whole body. They practice breathing out experiencing the whole body. They practice breathing in stilling the body’s motion. They practice breathing out stilling the body’s motion.'
								},
								{
									id: 'P-7.1.1.2',
									text: 'Mindfulness of short/light breaths',
									references: ['MN 118', 'MN 119', 'MN 10', 'DN 22'],
									elaboration:
										'And how is mindfulness of breathing developed and cultivated to be very fruitful and beneficial? It’s when a mendicant has gone to a wilderness, or to the root of a tree, or to an empty hut. They sit down cross-legged, with their body straight, and establish mindfulness right there. Just mindful, they breathe in. Mindful, they breathe out. When breathing in heavily they know: ‘I’m breathing in heavily.’ When breathing out heavily they know: ‘I’m breathing out heavily.’ When breathing in lightly they know: ‘I’m breathing in lightly.’ When breathing out lightly they know: ‘I’m breathing out lightly.’ They practice breathing in experiencing the whole body. They practice breathing out experiencing the whole body. They practice breathing in stilling the body’s motion. They practice breathing out stilling the body’s motion.'
								},
								{
									id: 'P-7.1.1.3',
									text: 'Mindfulness of the entire length of each breath',
									references: ['MN 118', 'MN 119', 'MN 10', 'DN 22'],
									elaboration:
										'And how is mindfulness of breathing developed and cultivated to be very fruitful and beneficial? It’s when a mendicant has gone to a wilderness, or to the root of a tree, or to an empty hut. They sit down cross-legged, with their body straight, and establish mindfulness right there. Just mindful, they breathe in. Mindful, they breathe out. When breathing in heavily they know: ‘I’m breathing in heavily.’ When breathing out heavily they know: ‘I’m breathing out heavily.’ When breathing in lightly they know: ‘I’m breathing in lightly.’ When breathing out lightly they know: ‘I’m breathing out lightly.’ They practice breathing in experiencing the whole body. They practice breathing out experiencing the whole body. They practice breathing in stilling the body’s motion. They practice breathing out stilling the body’s motion.'
								},
								{
									id: 'P-7.1.1.4',
									text: 'Mindfulness of calming the breath',
									references: ['MN 118', 'MN 119', 'MN 10', 'DN 22'],
									elaboration:
										'And how is mindfulness of breathing developed and cultivated to be very fruitful and beneficial? It’s when a mendicant has gone to a wilderness, or to the root of a tree, or to an empty hut. They sit down cross-legged, with their body straight, and establish mindfulness right there. Just mindful, they breathe in. Mindful, they breathe out. When breathing in heavily they know: ‘I’m breathing in heavily.’ When breathing out heavily they know: ‘I’m breathing out heavily.’ When breathing in lightly they know: ‘I’m breathing in lightly.’ When breathing out lightly they know: ‘I’m breathing out lightly.’ They practice breathing in experiencing the whole body. They practice breathing out experiencing the whole body. They practice breathing in stilling the body’s motion. They practice breathing out stilling the body’s motion.'
								}
							]
						},
						{
							id: 'P-7.1.2',
							text: 'Mindfulness of posture',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'Furthermore, hen a mendicant is walking they know: ‘I am walking.’ When standing they know: ‘I am standing.’ When sitting they know: ‘I am sitting.’ And when lying down they know: ‘I am lying down.’ Whatever posture their body is in, they know it. That too is how a mendicant meditates by observing an aspect of the body.',
							children: [
								{
									id: 'P-7.1.2.1',
									text: 'Walking',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'When a mendicant is walking they know: ‘I am walking.’ When standing they know: ‘I am standing.’ When sitting they know: ‘I am sitting.’ And when lying down they know: ‘I am lying down.’ Whatever posture their body is in, they know it. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.2.2',
									text: 'Standing',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'When a mendicant is walking they know: ‘I am walking.’ When standing they know: ‘I am standing.’ When sitting they know: ‘I am sitting.’ And when lying down they know: ‘I am lying down.’ Whatever posture their body is in, they know it. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.2.3',
									text: 'Sitting',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'When a mendicant is walking they know: ‘I am walking.’ When standing they know: ‘I am standing.’ When sitting they know: ‘I am sitting.’ And when lying down they know: ‘I am lying down.’ Whatever posture their body is in, they know it. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.2.4',
									text: 'Lying down',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'When a mendicant is walking they know: ‘I am walking.’ When standing they know: ‘I am standing.’ When sitting they know: ‘I am sitting.’ And when lying down they know: ‘I am lying down.’ Whatever posture their body is in, they know it. That too is how a mendicant meditates by observing an aspect of the body.'
								}
							]
						},
						{
							id: 'P-7.1.3',
							text: 'Situational awareness',
							references: ['MN 10', 'DN 22', 'SN 47.2'],
							elaboration:
								'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.',
							children: [
								{
									id: 'P-7.1.3.1',
									text: 'Going out and coming back',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.2',
									text: 'Looking ahead and looking aside',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.3',
									text: 'Bending and extending limbs',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.4',
									text: 'Dressing',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.5',
									text: 'Eating',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.6',
									text: 'Drinking',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.7',
									text: 'Chewing',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.8',
									text: 'Tasting',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.9',
									text: 'Urinating',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.10',
									text: 'Defecating',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.11',
									text: 'Falling asleep',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.12',
									text: 'Waking up',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.13',
									text: 'Speaking',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.3.14',
									text: 'Remaining silent',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant acts with situational awareness when going out and coming back; when looking ahead and aside; when bending and extending the limbs; when bearing the outer robe, bowl, and robes; when eating, drinking, chewing, and tasting; when urinating and defecating; when walking, standing, sitting, sleeping, waking, speaking, and keeping silent. That too is how a mendicant meditates by observing an aspect of the body.'
								}
							]
						},
						{
							id: 'P-7.1.4',
							text: 'Mindfulness of body parts',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.',
							children: [
								{
									id: 'P-7.1.4.1',
									text: 'Head hairs',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.2',
									text: 'Body hairs',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.3',
									text: 'Nails',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.4',
									text: 'Teeth',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.5',
									text: 'Skin',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.6',
									text: 'Flesh',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.7',
									text: 'Sinews',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.8',
									text: 'Bones',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.9',
									text: 'Bone marrow',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.10',
									text: 'Kidneys',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.11',
									text: 'Heart',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.12',
									text: 'Liver',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.13',
									text: 'Diaphragm',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.14',
									text: 'Spleen',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.15',
									text: 'Lungs',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.16',
									text: 'Intestines',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.17',
									text: 'Mesentery',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.18',
									text: 'Undigested food',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.19',
									text: 'Feces',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.20',
									text: 'Bile',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.21',
									text: 'Phlegm',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.22',
									text: 'Pus',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.23',
									text: 'Blood',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.24',
									text: 'Sweat',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.25',
									text: 'Fat',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.26',
									text: 'Tears',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.27',
									text: 'Grease',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.28',
									text: 'Saliva',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.29',
									text: 'Snot',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.30',
									text: 'Synovial fluid',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								},
								{
									id: 'P-7.1.4.31',
									text: 'Urine',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'Furthermore, a mendicant examines their own body, up from the soles of the feet and down from the tips of the hairs, wrapped in skin and full of many kinds of filth. ‘In this body there is head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine.’ It’s as if there were a bag with openings at both ends, filled with various kinds of grains, such as fine rice, wheat, mung beans, peas, sesame, and ordinary rice. And someone with good eyesight were to open it and examine the contents: ‘These grains are fine rice, these are wheat, these are mung beans, these are peas, these are sesame, and these are ordinary rice.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. That too is how a mendicant meditates by observing an aspect of the body.'
								}
							]
						},
						{
							id: 'P-7.1.5',
							text: 'Analysis of the four elements',
							references: ['MN 10', 'DN 22', 'MN 62', 'MN 28'],
							elaboration:
								'Furthermore, a mendicant examines their own body, whatever its placement or posture, according to the elements: ‘In this body there is the earth element, the water element, the fire element, and the air element.’ It’s as if a deft butcher or butcher’s apprentice were to kill a cow and sit down at the crossroads with the meat cut into portions. That too is how a mendicant meditates by observing an aspect of the body.',
							children: [
								{
									id: 'P-7.1.5.1',
									text: 'Earth element',
									references: ['MN 62', 'MN 28'],
									elaboration:
										'The interior earth element is said to be anything hard, solid, and appropriated that’s internal, pertaining to an individual. This includes: head hair, body hair, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver, diaphragm, spleen, lungs, intestines, mesentery, undigested food, feces, or anything else hard, solid, and appropriated that’s internal, pertaining to an individual. This is called the interior earth element. The interior earth element and the exterior earth element are just the earth element. This should be truly seen with right understanding like this: ‘This is not mine, I am not this, this is not my self.’ When you truly see with right understanding, you reject the earth element, detaching the mind from the earth element.'
								},
								{
									id: 'P-7.1.5.2',
									text: 'Water element',
									references: ['MN 62', 'MN 28'],
									elaboration:
										'What is the water element? The water element may be interior or exterior. And what is the interior water element? Anything that’s water, watery, and appropriated that’s internal, pertaining to an individual. This includes: bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial fluid, urine, or anything else that’s water, watery, and appropriated that’s internal, pertaining to an individual. This is called the interior water element. The interior water element and the exterior water element are just the water element. This should be truly seen with right understanding like this: ‘This is not mine, I am not this, this is not my self.’ When you truly see with right understanding, you reject the water element, detaching the mind from the water element.'
								},
								{
									id: 'P-7.1.5.3',
									text: 'Fire element',
									references: ['MN 62', 'MN 28'],
									elaboration:
										'What is the fire element? The fire element may be interior or exterior. And what is the interior fire element? Anything that’s fire, fiery, and appropriated that’s internal, pertaining to an individual. This includes: that which warms, that which ages, that which heats you up when feverish, that which properly digests food and drink, or anything else that’s fire, fiery, and appropriated that’s internal, pertaining to an individual. This is called the interior fire element. The interior fire element and the exterior fire element are just the fire element. This should be truly seen with right understanding like this: ‘This is not mine, I am not this, this is not my self.’ When you truly see with right understanding, you reject the fire element, detaching the mind from the fire element.'
								},
								{
									id: 'P-7.1.5.4',
									text: 'Air element',
									references: ['MN 62', 'MN 28'],
									elaboration:
										'What is the air element? The air element may be interior or exterior. And what is the interior air element? Anything that’s wind, windy, and appropriated that’s internal, pertaining to an individual. This includes: winds that go up or down, winds in the belly or the bowels, winds that flow through the limbs, in-breaths and out-breaths, or anything else that’s air, airy, and appropriated that’s internal, pertaining to an individual. This is called the interior air element. The interior air element and the exterior air element are just the air element. This should be truly seen with right understanding like this: ‘This is not mine, I am not this, this is not my self.’ When you truly see with right understanding, you reject the air element, detaching the mind from the air element.'
								}
							]
						},
						{
							id: 'P-7.1.6',
							text: 'Cemetery contemplations',
							elaboration:
								'Suppose a mendicant were to see a corpse discarded in a charnel ground, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’ And so they meditate observing an aspect of the body internally, externally, and both internally and externally. They meditate observing the body as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that the body exists, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That too is how a mendicant meditates by observing an aspect of the body.',
							references: ['MN 10', 'DN 22'],
							children: [
								{
									id: 'P-7.1.6.1',
									text: 'A bloated, livid, and festering corpse discarded in a charnel ground',
									elaboration:
										'Furthermore, suppose a mendicant were to see a corpse discarded in a charnel ground. And it had been dead for one, two, or three days, bloated, livid, and festering. They’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.2',
									text: 'A corpse being eaten by birds, animals and insects',
									elaboration:
										'Furthermore, suppose they were to see a corpse discarded in a charnel ground being devoured by crows, hawks, vultures, herons, dogs, tigers, leopards, jackals, and many kinds of little creatures. They’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.3',
									text: 'A skeleton with flesh and blood, held together by sinews',
									elaboration:
										'Furthermore, suppose they were to see a corpse discarded in a charnel ground, a skeleton with flesh and blood, held together by sinews, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.4',
									text: 'A skeleton without flesh but smeared with blood, held together by sinews',
									elaboration:
										'Furthermore, suppose they were to see a skeleton without flesh but smeared with blood, and held together by sinews, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.5',
									text: 'A skeleton rid of flesh and blood, held together by sinews',
									elaboration:
										'Furthermore, suppose they were to see a skeleton rid of flesh and blood, held together by sinews, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.6',
									text: 'Bones rid of sinews and scattered in every direction',
									elaboration:
										'Furthermore, suppose they were to see bones without sinews, scattered in every direction. Here a hand-bone, there a foot-bone, here a shin-bone, there a thigh-bone, here a hip-bone, there a rib-bone, here a back-bone, there an arm-bone, here a neck-bone, there a jaw-bone, here a tooth, there the skull, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.7',
									text: 'White bones, the color of shells',
									elaboration:
										'Furthermore, suppose they were to see white bones, the color of shells, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.8',
									text: 'Decrepit bones, heaped in a pile',
									elaboration:
										'Furthermore, suppose they were to see decrepit bones, heaped in a pile, they’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.1.6.9',
									text: 'Bones rotted and crumbled to powder',
									elaboration:
										'Furthermore, suppose they were to see bones rotted and crumbled to powder. They’d compare it with their own body: ‘This body is also of that same nature, that same kind, and cannot go beyond that.’',
									references: ['MN 10', 'DN 22']
								}
							]
						}
					]
				},
				{
					id: 'P-7.2',
					text: 'Mindfulness of sensations/feeling',
					references: ['MN 10', 'DN 22', 'SN 36.31'],
					elaboration:
						'And how does a mendicant meditate observing an aspect of feelings? They meditate observing an aspect of feelings internally, externally, and both internally and externally. They meditate observing feelings as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that feelings exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of feelings.',
					children: [
						{
							id: 'P-7.2.1',
							text: 'Pleasant sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? It’s when a mendicant who feels a pleasant feeling knows: ‘I feel a pleasant feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.2',
							text: 'Painful sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a painful feeling, they know: ‘I feel a painful feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.3',
							text: 'Neutral sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a neutral feeling, they know: ‘I feel a neutral feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.4',
							text: 'Pleasant material sensations/feeling',
							references: ['SN 36.31'],
							elaboration:
								'And what is material pleasure? Mendicants, there are these five kinds of sensual stimulation. What five? Sights known by the eye that are likable, desirable, agreeable, pleasant, sensual, and arousing. Sounds … Smells … Tastes … Touches known by the body that are likable, desirable, agreeable, pleasant, sensual, and arousing. These are the five kinds of sensual stimulation. The pleasure and happiness that arise from these five kinds of sensual stimulation is called material pleasure.'
						},
						{
							id: 'P-7.2.5',
							text: 'Pleasant spiritual sensations/feeling',
							references: ['SN 36.31'],
							elaboration:
								'And what is spiritual pleasure? It’s when a mendicant, quite secluded from sensual pleasures, secluded from unskillful qualities, enters and remains in the first absorption, which has the rapture and bliss born of seclusion, while placing the mind and keeping it connected. As the placing of the mind and keeping it connected are stilled, they enter and remain in the second absorption, which has the rapture and bliss born of immersion, with internal clarity and confidence, and unified mind, without placing the mind and keeping it connected. And with the fading away of rapture, they enter and remain in the third absorption, where they meditate with equanimity, mindful and aware, personally experiencing the bliss of which the noble ones declare, ‘Equanimous and mindful, one meditates in bliss.’ This is called spiritual pleasure. And what is even more spiritual pleasure? When a mendicant who has ended the defilements reviews their mind free from greed, hate, and delusion, pleasure and happiness arises. This is called even more spiritual pleasure.'
						},
						{
							id: 'P-7.2.6',
							text: 'Painful material sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a material painful feeling, they know: ‘I feel a material painful feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.7',
							text: 'Painful spiritual sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a spiritual painful feeling, they know: ‘I feel a spiritual painful feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.8',
							text: 'Neutral material sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a material neutral feeling, they know: ‘I feel a material neutral feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						},
						{
							id: 'P-7.2.9',
							text: 'Neutral spiritual sensations/feeling',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of feelings? When they feel a spiritual neutral feeling, they know: ‘I feel a spiritual neutral feeling.’ That’s how a mendicant meditates by observing an aspect of feelings.'
						}
					]
				},
				{
					id: 'P-7.3',
					text: 'Mindfulness of the mind',
					references: ['MN 10', 'DN 22'],
					elaboration:
						'And how does a mendicant meditate observing an aspect of the mind? They meditate observing an aspect of the mind internally, externally, and both internally and externally. They meditate observing the mind as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that the mind exists, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of the mind.',
					children: [
						{
							id: 'P-7.3.1',
							text: 'Mind with/without greed',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? It’s when a mendicant understands mind with greed as ‘mind with greed,’ and mind without greed as ‘mind without greed.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.2',
							text: 'Mind with/without hatred',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They understand mind with hate as ‘mind with hate,’ and mind without hate as ‘mind without hate.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.3',
							text: 'Mind with/without delusion',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They understand mind with delusion as ‘mind with delusion,’ and mind without delusion as ‘mind without delusion.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.4',
							text: 'Constricted or scattered mind',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They know constricted mind as ‘constricted mind,’ and scattered mind as ‘scattered mind.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.5',
							text: 'Expansive or unexpansive mind',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They know expansive mind as ‘expansive mind,’ and unexpansive mind as ‘unexpansive mind.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.6',
							text: 'Supreme or not supreme mind',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They know mind that is not supreme as ‘mind that is not supreme,’ and mind that is supreme as ‘mind that is supreme.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.7',
							text: 'Immersed or not immersed mind',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They know mind immersed in meditation as ‘mind immersed in meditation,’ and mind not immersed in meditation as ‘mind not immersed in meditation.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						},
						{
							id: 'P-7.3.8',
							text: 'Freed or unfreed mind',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of the mind? They know freed mind as ‘freed mind,’ and unfreed mind as ‘unfreed mind.’ That’s how a mendicant meditates by observing an aspect of the mind. '
						}
					]
				},
				{
					id: 'P-7.4',
					text: 'Mindfulness of principles',
					references: ['MN 10', 'DN 22'],
					elaboration:
						'And how does a mendicant meditate observing an aspect of principles? It’s when a mendicant meditates by observing an aspect of principles with respect to the five hindrances, the five aggregates, the six sense fields, the seven awakening factors, or the four noble truths. And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the five hindrances.',
					children: [
						{
							id: 'P-7.4.1',
							text: 'The 5 Hindrances',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'And how does a mendicant meditate observing an aspect of principles? It’s when a mendicant meditates by observing an aspect of principles with respect to the five hindrances. And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the five hindrances.',
							children: [
								{
									id: 'P-7.4.1.1',
									text: 'Sensual desire',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five hindrances? It’s when a mendicant who has sensual desire in them understands: ‘I have sensual desire in me.’ When they don’t have sensual desire in them, they understand: ‘I don’t have sensual desire in me.’ They understand how sensual desire arises; how, when it’s already arisen, it’s given up; and how, once it’s given up, it doesn’t arise again in the future.'
								},
								{
									id: 'P-7.4.1.2',
									text: 'Ill-will',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five hindrances? When they have ill will in them, they understand: ‘I have ill will in me.’ When they don’t have ill will in them, they understand: ‘I don’t have ill will in me.’ They understand how ill will arises; how, when it’s already arisen, it’s given up; and how, once it’s given up, it doesn’t arise again in the future.'
								},
								{
									id: 'P-7.4.1.3',
									text: 'Dullness and drowsiness',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five hindrances? When they have dullness and drowsiness in them, they understand: ‘I have dullness and drowsiness in me.’ When they don’t have dullness and drowsiness in them, they understand: ‘I don’t have dullness and drowsiness in me.’ They understand how dullness and drowsiness arise; how, when they’ve already arisen, they’re given up; and how, once they’re given up, they don’t arise again in the future.'
								},
								{
									id: 'P-7.4.1.4',
									text: 'Restlessness and remorse',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five hindrances? When they have restlessness and remorse in them, they understand: ‘I have restlessness and remorse in me.’ When they don’t have restlessness and remorse in them, they understand: ‘I don’t have restlessness and remorse in me.’ They understand how restlessness and remorse arise; how, when they’ve already arisen, they’re given up; and how, once they’re given up, they don’t arise again in the future.'
								},
								{
									id: 'P-7.4.1.5',
									text: 'Doubt',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five hindrances? When they have doubt in them, they understand: ‘I have doubt in me.’ When they don’t have doubt in them, they understand: ‘I don’t have doubt in me.’ They understand how doubt arises; how, when it’s already arisen, it’s given up; and how, once it’s given up, it doesn’t arise again in the future.'
								}
							]
						},
						{
							id: 'P-7.4.2',
							text: 'The 5 Aggregates',
							references: ['MN 10', 'DN 22', 'SN 22.59'],
							elaboration:
								'Furthermore, a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates. And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the five hindrances.',
							children: [
								{
									id: 'P-7.4.2.1',
									text: 'Form/matter',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five grasping aggregates? It’s when a mendicant contemplates: Such is form, such is the origin of form, such is the ending of form. That’s how a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates.'
								},
								{
									id: 'P-7.4.2.2',
									text: 'Sensation/feeling',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five grasping aggregates? Such is feeling, such is the origin of feeling, such is the ending of feeling. That’s how a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates.'
								},
								{
									id: 'P-7.4.2.3',
									text: 'Perception',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five grasping aggregates? Such is perception, such is the origin of perception, such is the ending of perception. That’s how a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates.'
								},
								{
									id: 'P-7.4.2.4',
									text: 'Volitional formations',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five grasping aggregates? Such are volitional formations, such is the origin of volitional formations, such is the ending of volitional formations. That’s how a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates.'
								},
								{
									id: 'P-7.4.2.5',
									text: 'Consciousness',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the five grasping aggregates? Such is consciousness, such is the origin of consciousness, such is the ending of consciousness.’ That’s how a mendicant meditates by observing an aspect of principles with respect to the five grasping aggregates.'
								}
							]
						},
						{
							id: 'P-7.4.3',
							text: 'The 6 Sense Fields',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'Furthermore, a mendicant meditates by observing an aspect of principles with respect to the six interior and exterior sense fields. And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the six interior and exterior sense fields.',
							children: [
								{
									id: 'P-7.4.3.1',
									text: 'Eye',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? It’s when a mendicant understands the eye, sights, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								},
								{
									id: 'P-7.4.3.2',
									text: 'Ear',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? They understand the ear, sounds, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								},
								{
									id: 'P-7.4.3.3',
									text: 'Nose',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? They understand the nose, smells, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								},
								{
									id: 'P-7.4.3.4',
									text: 'Tongue',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? They understand the tongue, tastes, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								},
								{
									id: 'P-7.4.3.5',
									text: 'Body',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? They understand the body, touches, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								},
								{
									id: 'P-7.4.3.6',
									text: 'Mind',
									references: ['MN 10', 'DN 22'],
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the six interior and exterior sense fields? They understand the mind, thoughts, and the fetter that arises dependent on both of these. They understand how the fetter that has not arisen comes to arise; how the arisen fetter comes to be abandoned; and how the abandoned fetter comes to not rise again in the future. That’s how a mendicant meditates by observing an aspect of principles with respect to the six internal and external sense fields.'
								}
							]
						},
						{
							id: 'P-7.4.4',
							text: 'The 7 Factors of Awakening',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'Furthermore, a mendicant meditates by observing an aspect of principles with respect to the seven awakening factors. And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the seven awakening factors.',
							children: [
								{
									id: 'P-7.4.4.1',
									text: 'Mindfulness',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of mindfulness in them understands: ‘I have the awakening factor of mindfulness in me.’ When they don’t have the awakening factor of mindfulness in them, they understand: ‘I don’t have the awakening factor of mindfulness in me.’ They understand how the awakening factor of mindfulness that has not arisen comes to arise; and how the awakening factor of mindfulness that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.2',
									text: 'Investigation of principles',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of investigation of principles in them understands: ‘I have the awakening factor of investigation of principles in me.’ When they don’t have the awakening factor of investigation of principles in them, they understand: ‘I don’t have the awakening factor of investigation of principles in me.’ They understand how the awakening factor of investigation of principles that has not arisen comes to arise; and how the awakening factor of investigation of principles that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.3',
									text: 'Energy',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of energy in them understands: ‘I have the awakening factor of energy in me.’ When they don’t have the awakening factor of energy in them, they understand: ‘I don’t have the awakening factor of energy in me.’ They understand how the awakening factor of energy that has not arisen comes to arise; and how the awakening factor of energy that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.4',
									text: 'Rapture',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of rapture in them understands: ‘I have the awakening factor of rapture in me.’ When they don’t have the awakening factor of rapture in them, they understand: ‘I don’t have the awakening factor of rapture in me.’ They understand how the awakening factor of rapture that has not arisen comes to arise; and how the awakening factor of rapture that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.5',
									text: 'Tranquility',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of tranquility in them understands: ‘I have the awakening factor of tranquility in me.’ When they don’t have the awakening factor of tranquility in them, they understand: ‘I don’t have the awakening factor of tranquility in me.’ They understand how the awakening factor of tranquility that has not arisen comes to arise; and how the awakening factor of tranquility that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.6',
									text: 'Concentration/immersion',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of concentration/immersion in them understands: ‘I have the awakening factor of concentration/immersion in me.’ When they don’t have the awakening factor of concentration/immersion in them, they understand: ‘I don’t have the awakening factor of concentration/immersion in me.’ They understand how the awakening factor of concentration/immersion that has not arisen comes to arise; and how the awakening factor of concentration/immersion that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								},
								{
									id: 'P-7.4.4.7',
									text: 'Equanimity',
									elaboration:
										'And how does a mendicant meditate observing an aspect of principles with respect to the seven awakening factors? It’s when a mendicant who has the awakening factor of equanimity in them understands: ‘I have the awakening factor of equanimity in me.’ When they don’t have the awakening factor of equanimity in them, they understand: ‘I don’t have the awakening factor of equanimity in me.’ They understand how the awakening factor of equanimity that has not arisen comes to arise; and how the awakening factor of equanimity that has arisen becomes fulfilled by development.',
									references: ['MN 10', 'DN 22']
								}
							]
						},
						{
							id: 'P-7.4.5',
							text: 'The 4 Noble Truths',
							references: ['MN 10', 'DN 22'],
							elaboration:
								'Furthermore, a mendicant meditates by observing an aspect of principles with respect to the four noble truths. And how does a mendicant meditate observing an aspect of principles with respect to the four noble truths? It’s when a mendicant truly understands: ‘This is suffering’ … ‘This is the origin of suffering’ … ‘This is the cessation of suffering’ … ‘This is the practice that leads to the cessation of suffering.’ And so they meditate observing an aspect of principles internally, externally, and both internally and externally. They meditate observing the principles as liable to originate, as liable to vanish, and as liable to both originate and vanish. Or mindfulness is established that principles exist, to the extent necessary for knowledge and mindfulness. They meditate independent, not grasping at anything in the world. That’s how a mendicant meditates by observing an aspect of principles with respect to the four noble truths.',
							children: [
								{
									id: 'P-7.4.5.1',
									text: 'Suffering',
									references: ['DN 22'],
									elaboration:
										'And what is the noble truth of suffering? Rebirth is suffering; old age is suffering; death is suffering; sorrow, lamentation, pain, sadness, and distress are suffering; association with the disliked is suffering; separation from the liked is suffering; not getting what you wish for is suffering. In brief, the five grasping aggregates are suffering. This is called the noble truth of suffering.'
								},
								{
									id: 'P-7.4.5.2',
									text: 'The origin of suffering',
									references: ['DN 22'],
									elaboration:
										'And what is the noble truth of the origin of suffering? It’s the craving that leads to future rebirth, mixed up with relishing and greed, looking for enjoyment in various different realms. That is, craving for sensual pleasures, craving for continued existence, and craving to end existence. But where does that craving arise and where does it settle? Whatever in the world seems nice and pleasant, it is there that craving arises and settles. This is called the noble truth of the origin of suffering.'
								},
								{
									id: 'P-7.4.5.3',
									text: 'The cessation of suffering',
									references: ['DN 22'],
									elaboration:
										'And what is the noble truth of the cessation of suffering? It’s the fading away and cessation of that very same craving with nothing left over; giving it away, letting it go, releasing it, and not adhering to it. Whatever in the world seems nice and pleasant, it is there that craving is given up and ceases. This is called the noble truth of the cessation of suffering.'
								},
								{
									id: 'P-7.4.5.4',
									text: 'The practice that leads to the cessation of suffering',
									references: ['DN 22'],
									elaboration:
										'And what is the noble truth of the practice that leads to the cessation of suffering? It is simply this noble eightfold path, that is: right view, right thought, right speech, right action, right livelihood, right effort, right mindfulness, and right immersion. This is called the noble truth of the practice that leads to the cessation of suffering.'
								}
							]
						}
					]
				}
			]
		},
		{
			id: 'P-8',
			text: 'Right Concentration',
			references: ['SN 45.8', 'SN 34', 'AN 5.28'],
			elaboration:
				'What is right concentration? It’s when a mendicant, quite secluded from sensual pleasures, secluded from unskillful qualities, enters and remains in the first absorption, which has the rapture and bliss born of seclusion, while placing the mind and keeping it connected. As the placing of the mind and keeping it connected are stilled, they enter and remain in the second absorption, which has the rapture and bliss born of concentration, with internal clarity and confidence, and unified mind, without placing the mind and keeping it connected. And with the fading away of rapture, they enter and remain in the third absorption, where they meditate with equanimity, mindful and aware, personally experiencing the bliss of which the noble ones declare, ‘Equanimous and mindful, one meditates in bliss.’ Giving up pleasure and pain, and ending former happiness and sadness, they enter and remain in the fourth absorption, without pleasure or pain, with pure equanimity and mindfulness. This is called right concentration.”',
			children: [
				{
					id: 'P-8.1',
					text: 'First jhana'
				},
				{
					id: 'P-8.2',
					text: 'Second jhana'
				},
				{
					id: 'P-8.3',
					text: 'Third jhana'
				},
				{
					id: 'P-8.4',
					text: 'Fourth jhana'
				}
			]
		}
	]
};
