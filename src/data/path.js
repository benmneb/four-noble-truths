import { origin } from './index';

export const path = {
	truth: 'The Path Leading to the Cessation of Suffering',
	quotes: [
		{
			text:
				'This is the noble truth of the practice that leads to the cessation of suffering: It is simply this noble eightfold path.',
			reference: 'SN 56.11'
		}
	],
	seeMore: ['SN 45.8'],
	treeTitle: 'The Noble Eightfold Path',
	tree: [
		{
			id: 'P-1',
			text: 'Right View',
			references: ['MN 41', 'SN 45.8', 'SN 12.15', 'MN 9'],
			children: [
				{
					id: 'P-1.1',
					text: 'An undistorted perspective',
					references: ['MN 41'],
					children: [
						{
							id: 'P-1.1.1',
							text: 'There’s meaning in giving, sacrifice, or offerings'
						},
						{
							id: 'P-1.1.2',
							text: 'There’s fruit/result of good and bad deeds'
						},
						{
							id: 'P-1.1.3',
							text: 'There’s an afterlife'
						},
						{
							id: 'P-1.1.4',
							text: 'There’s mother and father (and their feelings should be considered)'
						},
						{
							id: 'P-1.1.5',
							text: 'There’s beings who are reborn spontaneously'
						},
						{
							id: 'P-1.1.6',
							text:
								'There’s well attained meditators who describe the afterlife after realizing it with their own insight'
						}
					]
				},
				{
					id: 'P-1.2',
					text:
						'Understand at least one of these, their origin, their cessation, and the way to their cessation:',
					references: [''],
					children: [
						{
							id: 'P-1.2.1',
							text: 'The 4 Noble Truths',
							references: ['SN 45.8'],
							children: [
								{
									id: 'P-1.2.1.1',
									text: 'Suffering'
								},
								{
									id: 'P-1.2.1.2',
									text: 'The origin of suffering'
								},
								{
									id: 'P-1.2.1.3',
									text: 'The cessation of suffering'
								},
								{
									id: 'P-1.2.1.4',
									text: 'The path leading to the cessation of suffering'
								}
							]
						},
						{
							id: 'P-1.2.2',
							text: 'Dependent Origination',
							references: ['SN 12.15'],
							children: [...origin.tree]
						},
						{
							id: 'P-1.2.3',
							text: 'The wholesome and the unwholesome',
							references: ['MN 9'],
							children: [
								{
									id: 'P-1.2.3.1',
									text: 'Unwholesome roots',
									children: [
										{
											id: 'P-1.2.3.1.1',
											text: 'Greed'
										},
										{
											id: 'P-1.2.3.1.2',
											text: 'Hatred'
										},
										{
											id: 'P-1.2.3.1.3',
											text: 'Delusion'
										}
									]
								},
								{
									id: 'P-1.2.3.2',
									text: 'Wholesome roots',
									children: [
										{
											id: 'P-1.2.3.2.1',
											text: 'Non-greed'
										},
										{
											id: 'P-1.2.3.2.2',
											text: 'Non-hatred'
										},
										{
											id: 'P-1.2.3.2.3',
											text: 'Non-delusion'
										}
									]
								}
							]
						},
						{
							id: 'P-1.2.4',
							text: 'Nutriment',
							references: ['MN 9'],
							children: [
								{
									id: 'P-1.2.4.1',
									text: 'Physical food'
								},
								{
									id: 'P-1.2.4.2',
									text: 'Contact'
								},
								{
									id: 'P-1.2.4.3',
									text: 'Mental volition'
								},
								{
									id: 'P-1.2.4.4',
									text: 'Consciousness'
								}
							]
						},
						{
							id: 'P-1.2.5',
							text: 'The taints',
							references: ['MN 9'],
							children: [
								{
									id: 'P-1.2.5.1',
									text: 'Sensual desire'
								},
								{
									id: 'P-1.2.5.2',
									text: 'Desire for being'
								},
								{
									id: 'P-1.2.5.3',
									text: 'Ignorance'
								}
							]
						}
					]
				}
			]
		},
		{
			id: 'P-2',
			text: 'Right Intention',
			references: ['TODO'],
			children: [
				{
					id: 'P-2.1',
					text: 'Renunciation'
				},
				{
					id: 'P-2.2',
					text: 'Good-will/Non ill-will'
				},
				{
					id: 'P-2.3',
					text: 'Harmlessness'
				}
			]
		},
		{
			id: 'P-3',
			text: 'Right Speech',
			references: ['MN 41', 'MN 139', 'MN 58'],
			children: [
				{
					id: 'P-3.1',
					text: 'Abstaining from false speech'
				},
				{
					id: 'P-3.2',
					text: 'Abstaining from slanderous/divisive speech'
				},
				{
					id: 'P-3.3',
					text: 'Abstaining from harsh speech'
				},
				{
					id: 'P-3.4',
					text: 'Abstaining from idle chatter/nonsensical speech'
				}
			]
		},
		{
			id: 'P-4',
			text: 'Right Action',
			references: ['MN 41'],
			children: [
				{
					id: 'P-4.1',
					text: 'Abstaining from killing sentient beings'
				},
				{
					id: 'P-4.2',
					text: 'Abstaining from stealing'
				},
				{
					id: 'P-4.3',
					text: 'Abstaining from sexual misconduct'
				}
			]
		},
		{
			id: 'P-5',
			text: 'Right Livelihood',
			references: ['TODO'],
			children: [
				{
					id: 'P-5.1',
					text: 'For lay people',
					children: [
						{
							id: 'P-5.1.1',
							text: 'Abstain from trading in weapons'
						},
						{
							id: 'P-5.1.2',
							text: 'Abstain from trading in sentient beings'
						},
						{
							id: 'P-5.1.3',
							text: 'Abstain from trading in meat'
						},
						{
							id: 'P-5.1.4',
							text: 'Abstain from trading in intoxicants'
						},
						{
							id: 'P-5.1.5',
							text: 'Abstain from trading in poisons'
						}
					]
				},
				{
					id: 'P-5.2',
					text: 'For monks/nuns',
					children: [
						{
							id: 'P-5.2.1',
							text: 'Abstain from making predictions'
						},
						{
							id: 'P-5.2.2',
							text: 'Abstain from offering protective charms'
						},
						{
							id: 'P-5.2.3',
							text: 'Abstain from acting in a servile capacity for lay people'
						}
					]
				}
			]
		},
		{
			id: 'P-6',
			text: 'Right Effort',
			references: ['TODO'],
			children: [
				{
					id: 'P-6.0',
					text:
						'"Generate enthusiasm, try, make an effort, exert the mind, and strive to..."'
				},
				{
					id: 'P-6.1',
					text: 'Prevent arising of unarisen unskillful states of mind'
				},
				{
					id: 'P-6.2',
					text: 'Abandon arisen unskillful states of mind'
				},
				{
					id: 'P-6.3',
					text: 'Cultivate unarisen skillful states of mind'
				},
				{
					id: 'P-6.4',
					text: 'Maintain and develop arisen skillful states of mind'
				}
			]
		},
		{
			id: 'P-7',
			text: 'Right Mindfulness',
			references: ['MN 10', 'DN 22'],
			children: [
				{
					id: 'P-7.1',
					text: 'Mindfulness of the body',
					references: [''],
					children: [
						{
							id: 'P-7.1.1',
							text: 'Mindfulness of breathing',
							children: [
								{
									id: 'P-7.1.1.1',
									text: 'Mindfulness of long/heavy breaths'
								},
								{
									id: 'P-7.1.1.2',
									text: 'Mindfulness of short/light breaths'
								},
								{
									id: 'P-7.1.1.3',
									text: 'Mindfulness of the entire length of each breath'
								},
								{
									id: 'P-7.1.1.4',
									text: 'Mindfulness of calming the breath'
								}
							]
						},
						{
							id: 'P-7.1.2',
							text: 'Mindfulness of posture',
							children: [
								{
									id: 'P-7.1.2.1',
									text: 'Walking'
								},
								{
									id: 'P-7.1.2.2',
									text: 'Standing'
								},
								{
									id: 'P-7.1.2.3',
									text: 'Sitting'
								},
								{
									id: 'P-7.1.2.4',
									text: 'Lying down'
								}
							]
						},
						{
							id: 'P-7.1.3',
							text: 'Situational awareness',
							children: [
								{
									id: 'P-7.1.3.1',
									text: 'Going out and coming back'
								},
								{
									id: 'P-7.1.3.2',
									text: 'Looking ahead and looking aside'
								},
								{
									id: 'P-7.1.3.3',
									text: 'Bending and extending limbs'
								},
								{
									id: 'P-7.1.3.4',
									text: 'Dressing'
								},
								{
									id: 'P-7.1.3.5',
									text: 'Eating'
								},
								{
									id: 'P-7.1.3.6',
									text: 'Drinking'
								},
								{
									id: 'P-7.1.3.7',
									text: 'Chewing'
								},
								{
									id: 'P-7.1.3.8',
									text: 'Tasting'
								},
								{
									id: 'P-7.1.3.9',
									text: 'Urinating'
								},
								{
									id: 'P-7.1.3.10',
									text: 'Defecating'
								},
								{
									id: 'P-7.1.3.11',
									text: 'Falling asleep'
								},
								{
									id: 'P-7.1.3.12',
									text: 'Waking up'
								},
								{
									id: 'P-7.1.3.13',
									text: 'Speaking'
								},
								{
									id: 'P-7.1.3.14',
									text: 'Remaining silent'
								}
							]
						},
						{
							id: 'P-7.1.4',
							text: 'Mindfulness of body parts',
							children: [
								{
									id: 'P-7.1.4.1',
									text: 'Head hairs'
								},
								{
									id: 'P-7.1.4.2',
									text: 'Body hairs'
								},
								{
									id: 'P-7.1.4.3',
									text: 'Nails'
								},
								{
									id: 'P-7.1.4.4',
									text: 'Teeth'
								},
								{
									id: 'P-7.1.4.5',
									text: 'Skin'
								},
								{
									id: 'P-7.1.4.6',
									text: 'Flesh'
								},
								{
									id: 'P-7.1.4.7',
									text: 'Sinews'
								},
								{
									id: 'P-7.1.4.8',
									text: 'Bones'
								},
								{
									id: 'P-7.1.4.9',
									text: 'Bone marrow'
								},
								{
									id: 'P-7.1.4.10',
									text: 'Kidneys'
								},
								{
									id: 'P-7.1.4.11',
									text: 'Heart'
								},
								{
									id: 'P-7.1.4.12',
									text: 'Liver'
								},
								{
									id: 'P-7.1.4.13',
									text: 'Diaphragm'
								},
								{
									id: 'P-7.1.4.14',
									text: 'Spleen'
								},
								{
									id: 'P-7.1.4.15',
									text: 'Lungs'
								},
								{
									id: 'P-7.1.4.16',
									text: 'Intestines'
								},
								{
									id: 'P-7.1.4.17',
									text: 'Mesentery'
								},
								{
									id: 'P-7.1.4.18',
									text: 'Undigested food'
								},
								{
									id: 'P-7.1.4.19',
									text: 'Feces'
								},
								{
									id: 'P-7.1.4.20',
									text: 'Bile'
								},
								{
									id: 'P-7.1.4.21',
									text: 'Phlegm'
								},
								{
									id: 'P-7.1.4.22',
									text: 'Pus'
								},
								{
									id: 'P-7.1.4.23',
									text: 'Blood'
								},
								{
									id: 'P-7.1.4.24',
									text: 'Sweat'
								},
								{
									id: 'P-7.1.4.25',
									text: 'Fat'
								},
								{
									id: 'P-7.1.4.26',
									text: 'Tears'
								},
								{
									id: 'P-7.1.4.27',
									text: 'Grease'
								},
								{
									id: 'P-7.1.4.28',
									text: 'Saliva'
								},
								{
									id: 'P-7.1.4.29',
									text: 'Snot'
								},
								{
									id: 'P-7.1.4.30',
									text: 'Synovial fluid'
								},
								{
									id: 'P-7.1.4.31',
									text: 'Urine'
								}
							]
						},
						{
							id: 'P-7.1.5',
							text: 'Analysis of the four elements',
							children: [
								{
									id: 'P-7.1.5.1',
									text: 'Earth element/solidity'
								},
								{
									id: 'P-7.1.5.2',
									text: 'Water element/fluidity'
								},
								{
									id: 'P-7.1.5.3',
									text: 'Fire element/temperature'
								},
								{
									id: 'P-7.1.5.4',
									text: 'Air element/cohesion'
								}
							]
						},
						{
							id: 'P-7.1.6',
							text: 'Cemetery contemplations',
							children: [
								{
									id: 'P-7.1.6.1',
									text:
										'A bloated, livid, and festering corpse discarded in a charnel ground'
								},
								{
									id: 'P-7.1.6.2',
									text: 'A corpse being eaten by birds, animals and insects'
								},
								{
									id: 'P-7.1.6.3',
									text: 'A skeleton with flesh and blood, held together by sinews'
								},
								{
									id: 'P-7.1.6.4',
									text:
										'A skeleton without flesh but smeared with blood, held together by sinews'
								},
								{
									id: 'P-7.1.6.5',
									text: 'A skeleton rid of flesh and blood, held together by sinews'
								},
								{
									id: 'P-7.1.6.6',
									text: 'Bones rid of sinews and scattered in every direction'
								},
								{
									id: 'P-7.1.6.7',
									text: 'White bones, the color of shells'
								},
								{
									id: 'P-7.1.6.8',
									text: 'Decrepit bones, heaped in a pile'
								},
								{
									id: 'P-7.1.6.9',
									text: 'Bones rotted and crumbled to powder'
								}
							]
						}
					]
				},
				{
					id: 'P-7.2',
					text: 'Mindfulness of sensations/feeling',
					references: [''],
					children: [
						{
							id: 'P-7.2.1',
							text: 'Pleasant sensations/feeling'
						},
						{
							id: 'P-7.2.2',
							text: 'Unpleasant sensations/feeling'
						},
						{
							id: 'P-7.2.3',
							text: 'Neutral sensations/feeling'
						},
						{
							id: 'P-7.2.4',
							text: 'Pleasant material sensations/feeling'
						},
						{
							id: 'P-7.2.5',
							text: 'Pleasant spiritual sensations/feeling'
						},
						{
							id: 'P-7.2.6',
							text: 'Unpleasant material sensations/feeling'
						},
						{
							id: 'P-7.2.7',
							text: 'Unpleasant spiritual sensations/feeling'
						},
						{
							id: 'P-7.2.8',
							text: 'Neutral material sensations/feeling'
						},
						{
							id: 'P-7.2.9',
							text: 'Neutral spiritual sensations/feeling'
						}
					]
				},
				{
					id: 'P-7.3',
					text: 'Mindfulness of the mind',
					references: [''],
					children: [
						{
							id: 'P-7.3.1',
							text: 'Mindfulness of mind with/without greed'
						},
						{
							id: 'P-7.3.2',
							text: 'Mindfulness of mind with/without hatred'
						},
						{
							id: 'P-7.3.3',
							text: 'Mindfulness of mind with/without delusion'
						},
						{
							id: 'P-7.3.4',
							text: 'Mindfulness of constricted or scattered mind'
						},
						{
							id: 'P-7.3.5',
							text: 'Mindfulness of developed or undeveloped mind'
						},
						{
							id: 'P-7.3.6',
							text: 'Mindfulness of surpassable or unsurpassable mind'
						},
						{
							id: 'P-7.3.7',
							text: 'Mindfulness of concentrated or unconcentrated mind'
						},
						{
							id: 'P-7.3.8',
							text: 'Mindfulness of freed or unfreed mind'
						}
					]
				},
				{
					id: 'P-7.4',
					text: 'Mindfulness of principles',
					references: [''],
					children: [
						{
							id: 'P-7.4.1',
							text: 'The 5 Hindrances',
							references: [''],
							children: [
								{
									id: 'P-7.4.1.1',
									text: 'Sensual desire'
								},
								{
									id: 'P-7.4.1.2',
									text: 'Ill-will'
								},
								{
									id: 'P-7.4.1.3',
									text: 'Dullness and drowsiness'
								},
								{
									id: 'P-7.4.1.4',
									text: 'Restlessness and remorse'
								},
								{
									id: 'P-7.4.1.5',
									text: 'Doubt'
								}
							]
						},
						{
							id: 'P-7.4.2',
							text: 'The 5 Aggregates',
							references: [''],
							children: [
								{
									id: 'P-7.4.2.1',
									text: 'Form/matter'
								},
								{
									id: 'P-7.4.2.2',
									text: 'Sensation/feeling'
								},
								{
									id: 'P-7.4.2.3',
									text: 'Perception'
								},
								{
									id: 'P-7.4.2.4',
									text: 'Volitional formations'
								},
								{
									id: 'P-7.4.2.5',
									text: 'Consciousness'
								}
							]
						},
						{
							id: 'P-7.4.3',
							text: 'The 6 Sense Fields',
							references: [''],
							children: [
								{
									id: 'P-7.4.3.1',
									text: 'Eye'
								},
								{
									id: 'P-7.4.3.2',
									text: 'Ear'
								},
								{
									id: 'P-7.4.3.3',
									text: 'Nose'
								},
								{
									id: 'P-7.4.3.4',
									text: 'Tongue'
								},
								{
									id: 'P-7.4.3.5',
									text: 'Body'
								},
								{
									id: 'P-7.4.3.6',
									text: 'Mind'
								}
							]
						},
						{
							id: 'P-7.4.4',
							text: 'The 7 Factors of Awakening',
							references: [''],
							children: [
								{
									id: 'P-7.4.4.1',
									text: 'Mindfulness'
								},
								{
									id: 'P-7.4.4.2',
									text: 'Investigation of principles'
								},
								{
									id: 'P-7.4.4.3',
									text: 'Energy'
								},
								{
									id: 'P-7.4.4.4',
									text: 'Rapture'
								},
								{
									id: 'P-7.4.4.5',
									text: 'Tranquility'
								},
								{
									id: 'P-7.4.4.6',
									text: 'Immersion/concentration'
								},
								{
									id: 'P-7.4.4.7',
									text: 'Equanimity'
								}
							]
						},
						{
							id: 'P-7.4.5',
							text: 'The 4 Noble Truths',
							references: [''],
							children: [
								{
									id: 'P-7.4.5.1',
									text: 'Suffering'
								},
								{
									id: 'P-7.4.5.2',
									text: 'The origin of suffering'
								},
								{
									id: 'P-7.4.5.3',
									text: 'The cessation of suffering'
								},
								{
									id: 'P-7.4.5.4',
									text: 'The practice that leads to the cessation of suffering'
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
			references: ['TODO'],
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
