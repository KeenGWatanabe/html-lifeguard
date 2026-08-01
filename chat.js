

const keywordResponses = {
	"hello":"Hello! How can I assist you today?",
	"time": `The current time is ${new Date().toLocaleTimeString()}.`,
	"date": `Today is ${new Date().toLocaleDateString()}.`,
	"goodbye" : "Goodbye! Have a great day!",
	"unbelievable": "yes unbelievable",
	"teach ls1": "Reach, Throw, Wade, Accompanied Rescue 25m",
	"teach ls2": "airway, vomitting, recovery, throw rope, board tow 25m",
	"teach ls3": "sculling, thread, assisted landing, EAR shallow rescue, EAR 20m deep rescue, defense & release",
	};
function processInput() {
	const userInput = document.getElementById("text_a").value;
	const response = document.getElementById("userInput");
	
	// Convert user input to lowercase for case-insensitive matching
	const input = userInput.toLowerCase();
	
	// Check if any keyword matches the user input
for (const keyword in keywordResponses) {
	if (input.includes(keyword)) {
	response.textContent = keywordResponses[keyword];
	return;
c 		
}else if(input.toLowerCase().indexOf("lss")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`SLSS - Singapore Life Saving Society<br>RLSS - Royal Life Saving Society<br>SLSAA - Surf Life Saving Association of Australia`;
	return;
}else if(input.toLowerCase().indexOf("how")>-1&&input.toLowerCase().indexOf("weather")>-1){response.innerHTML=`The weather today is <a href="https://www.nea.gov.sg/" target="_blank">NEA website</a>`;
return;
}else if(input.toLowerCase().indexOf("bus")>-1&&input.toLowerCase().indexOf("next")>-1){response.innerHTML=`Check SBS transit app here <a href="https://www.sbstransit.com.sg/service/sbs-transit-app" target="_blank">SBS website</a>`;
return;}
//insert below*
else if(input.toLowerCase().indexOf("lifesaving")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("lifesaving")>-1&&input.toLowerCase().indexOf("defin")>-1){response.innerHTML=`Generally define as the saving of human life, through the prevention of drowning.  Thus, it involves rescue operations in and around water, as well as drowning prevention methodology.<br><a href="https://www.merriam-webster.com/dictionary/lifesaving" target="_blank">merriam-webster on lifesaving</a><br><a href="https://www.cdc.gov/drowning/facts/index.html#:~:text=What%20is%20drowning%3F,person%20survives%20a%20drowning%20incident." target="_blank">CDC on drowning</a>`;return;}

else if(input.toLowerCase().indexOf("drown")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("drown")>-1&&input.toLowerCase().indexOf("how")>-1||input.toLowerCase().indexOf("drown")>-1&&input.toLowerCase().indexOf("people")>-1){response.innerHTML=`"A process of experiencing respiratory impairment from fluid submersion/immersion". Survivors of drowning may suffer disabilities or costly aftercare.<br><a href="https://www.cdc.gov/drowning/facts/index.html#:~:text=What%20is%20drowning%3F,person%20survives%20a%20drowning%20incident." target="_blank">CDC on drowning</a>`;return;}

else if(input.toLowerCase().indexOf("slss")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("slss")>-1&&input.toLowerCase().indexOf("who")>-1||input.toLowerCase().indexOf("lifesaving society")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`The acronym SLSS stands for Singapore Lifesaving Society, is a non-profit organisation, affiliated with Royal Life Saving Society (RLSS). The syllabus of your lifesaving awards originated from RLSS with adaptation for regional environment where suitable. <br><a href="https://www.slss.org.sg/" target="_blank">SLSS website</a><br><a href="https://www.rlss.org.uk/" target="_blank">RLSS website</a>`;return;}	

else if(input.toLowerCase().indexOf("risk")>-1&&input.toLowerCase().indexOf("lifesaving")>-1||input.toLowerCase().indexOf("risk")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("risk")>-1&&input.toLowerCase().indexOf("manage")>-1){response.innerHTML=`Activity risks arises with combination of the environment, hazards, skills level, awareness, people.<br>This can be manage in view of risk severity, likelihood of occurence, level of risk. When humans are aware of risk to life, will attempt appropriate actions to mitigate/avoid those risks.<br>The instructor's risk awareness should be more, and has reponsibility in ensuring a safe risk managed environment to conduct classes,<br>ongoing the students are inculcated with risk management skills and awareness throughout the course as well.
`;return;}

else if(input.toLowerCase().indexOf("insur")>-1&&input.toLowerCase().indexOf("lifesaving")>-1||input.toLowerCase().indexOf("insur")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("insur")>-1&&input.toLowerCase().indexOf("risk")>-1){response.innerHTML=`Generally, Singapore has no insurance for sports coaches' activities, participants can only rely on <b>personal accident insurance</b> for on individual purchase.  Do check your policy's terms and conditions if there is any clause that excludes coverage in part-taking certain activities, example car racing, sky diving, mountain climbing and high risks extreme sports are common exclusions in insurance policies.  Swimming and lifesaving lessons have not been specifically excluded in personal accidents policies so far.<br>Accidents occuring in certain venues are covered by <b>public liability insurace</b> undertaken by property owners.`;return;}


//s1-lifesaving***


//s2-hygiene*
else if(input.toLowerCase().indexOf("disease")>-1&&input.toLowerCase().indexOf("transmi")>-1||input.toLowerCase().indexOf("disease")>-1&&input.toLowerCase().indexOf("transfer")>-1){response.innerHTML=`some transmissable diseases in the cause of lifesaving to be aware of are: <br>[]colds, <br>[]influenza, <br>[]measles and mumps, <br>[]glandular fever, <br>[]Hepatitis A or B, <br>[]AIDS, <br>[]SARS, <br>[]Herpes, <br>[]Tuberculosis, <br>[]some forms of meningitis, <br>[]some skin infections.-Reference from SLSS manual`;return;}
//s2-hygiene***
//s3-rescue*
else if(input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("drown")>-1&&input.toLowerCase().indexOf("how")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("steps")>-1&&input.toLowerCase().indexOf("drown")>-1){response.innerHTML=`Sequence of a lifesaver's rescue steps:<br> [] Awareness - recognise emergency & accept responsibility <br>[] Assess situation and make informed judgement <br>[] Action a plan & act on the rescue <br>[] Aftercare - give aid until medical help arrive.(RLSS manual reference)`;return;}

else if(input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("principle")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("steps")>-1){response.innerHTML=`Sequence of a lifesaver's rescue steps: <br>[] Alert to an emergencty <br>[] Accept rescue responsibility <br>[] Assess situation <br>[] Action a plan <br>[] Act on the rescue <br>[] Aftercare-tel. no. to report casualty's name, hospital sent to.(Reference from SLSS manual)`;return;}


else if(input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("steps")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("plan")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("ladder")>-1){response.innerHTML=`Also known as "rescue ladder", these are the sequence of rescue to adopt, from the safest for rescuer to risks levels dependent on the rescuer's skill level and competency<br><b>Talk<br>Reach <br>Throw<br>Wade<br>Row<br>Swim <br>Tow </b>(non-contact => contact tow)<br>.(Reference from SLSS manual)`;return;}
//s3-rescue-tow
else if(input.toLowerCase().indexOf("non contact")>-1&&input.toLowerCase().indexOf("rescue")>-1||input.toLowerCase().indexOf("accompanied")>-1&&input.toLowerCase().indexOf("rescue")>-1){response.innerHTML=`swim out with a buoyant aid, accompany casualty to safety without direct contact.<br>approach reassure the casualty;<br>keeping safe distance at defensive position;<br>ask casualty to grasp aid firmly, kick to move;<br>providing reassurance throughout(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("extended tow")>-1){response.innerHTML=`calm cooperative casualty;<br>hold casualty's chin, elbows locked straight;<br>side-stroke scissors kick;<br>maintain observation of casualty.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("clothing tow")>-1){response.innerHTML=`calm cooperative clothed casualty;<br>hold casualty cloths below collar to avoid choking neck, arms relax avoid jerking motion;<br>egg beater kick or survival kick;<br>encourage casualty to scull with free arm and kick if possible<br>maintain observation of casualty.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("wrist tow")>-1){response.innerHTML=`calm cooperative casualty;<br>grasp back of casualty's wrist;<br>side stroke scissors kick;<br>encourage casualty to stroke with free arm and kick if possible<br>maintain observation of casualty.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("chin tow")>-1){response.innerHTML=`necessaary to maintain firm, close control of casualty;<br>approach from behind, place one hand on casualty chin;<br>rest casualty's head on your shoulder on towing arm side;<br>survival kick, egg beater kick.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("double shoulder tow")>-1){response.innerHTML=`necessaary to maintain greater control, elevate casualty head over rough water;<br>approach from behind, hook both hands under the armpits and grasp the shoulders;<br>survival kick, egg beater kick.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("cross chest tow")>-1){response.innerHTML=`over rough water;<br>approach from behind, cross an arm over the chest of casualty;<br>grip under the armpit clamp elbow to casualty's chest;<br>sidestroke scissors kick.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("support tow")>-1){response.innerHTML=`with buoyant aid for unconscious non-breathing casualty;<br>hold board with one hand, chin tow casualty;<br>every 3 sec, EAR blow to the nose(rest head on board elbow, chin hand press thumb to seal the mouth).CHECK THIS .(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("head tow")>-1){response.innerHTML=`firm stabilize head hold necessary;<br>palm inwards place firmly both side of casualty's head;<br>survial kick or egg beater kick.(Reference from SLSS manual)`;return;}


else if(input.toLowerCase().indexOf("vice grip tow")>-1){response.innerHTML=`for suspected spinal injury;<br>approach from side;<br>place one forearm along spine with hand cupping back of casualty's head;<br>other forearm on casualty's sternum supporting jaw;<br>lock both writs and squeeze the forearms together to create a vice, immobilises casualty's body with an upward downward pressure;<br>for casualty face down in water, vice grip first then rotate person to face up; move carefully minimise motion altering casualty's hips and legs.(Reference from SLSS manual)`;return;}
//s3-rescue-tow***
//s3-rescue-defense*
else if(input.toLowerCase().indexOf("defen")>-1&&input.toLowerCase().indexOf("purpose")>-1||input.toLowerCase().indexOf("defen")>-1&&input.toLowerCase().indexOf("why")>-1){response.innerHTML=`Use it to avoid being grasped by being in a position that is out-of-reach;<br>ward off sudden grasp from casualty;<br>Use variations of the proven techniques as appropriate.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("defen")>-1&&input.toLowerCase().indexOf("position")>-1||input.toLowerCase().indexOf("ready")>-1&&input.toLowerCase().indexOf("position")>-1||input.toLowerCase().indexOf("stand")>-1&&input.toLowerCase().indexOf("off")>-1){response.innerHTML=`<b>When</b>-approaching conscious casualty, to make final assessment from a safe position.<br><b>How</b><br>at safe distance(out of reach)<br>tuck legs rapidly under body, learn backwards 45°, arms sculling & extend one leg in front,<br>eyes towards casualty observing.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("reverse")>-1&&input.toLowerCase().indexOf("when")>-1||input.toLowerCase().indexOf("defen")>-1&&input.toLowerCase().indexOf("reverse")>-1){response.innerHTML=`Use it when casualty attempts to grasp you;<br>tuck legs rapidly under body and push them forward,<br>kick vigorously away & re-adopt defensive position.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("when")>-1||input.toLowerCase().indexOf("defen")>-1&&input.toLowerCase().indexOf("block")>-1){response.innerHTML=`Use it when casualty lunges at you;<br>raise arm or leg or aid to block him,<br>push agains casualty's chest area<br>swim away or submerge if necessary<br><b>use strong direct push against a large target area (chest) with speed and vigour</b>.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("aid")>-1||input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("kickboard")>-1){response.innerHTML=`Use it when casualty lunges at you;<br>raise the kickboard to block him,<br>likely casualty will grasp kickboard first<br>move away and adopt defensive position asap.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("arm")>-1||input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("hand")>-1){response.innerHTML=`Use it when casualty lunges at you;<br><b>single arm</b> extended forward vigorously at casualty's upper chest &<br>lifesaver <b>submerges</b> and move away underwater, OR<br>if lifesaver <b>head above water</b> without submerging, the arm thrust combined with reverse kick away.<br>P.S. same application if using <b>two arm thrust.</b>(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("leg")>-1||input.toLowerCase().indexOf("block")>-1&&input.toLowerCase().indexOf("tuck")>-1){response.innerHTML=`Use it when casualty lunges at you;<br>adopt a <b>tuck position</b> place one foot against casualty's upper chest & extend leg to push (not kick) him away.<br>P.S. intial practice against poolside, then introduce partner, train for accuracy foot placement starting slow before building up speed.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("escape")>-1&&input.toLowerCase().indexOf("principles")>-1||input.toLowerCase().indexOf("escape")>-1&&input.toLowerCase().indexOf("technique")>-1){response.innerHTML=`Happens when lifesaver error, before rescuer can react.<br>No escape technique is effective in all cases,<br>"effectiveness of escape is more important" than the mechanics of technique.<br>Escape from <b>wrist grasp, front grasp, rear grasp, leg grasp</b><br>key points=> direct force against large target, speed and vigour. <br>(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("wrist")>-1&&input.toLowerCase().indexOf("grasp")>-1||input.toLowerCase().indexOf("wrist")>-1&&input.toLowerCase().indexOf("grab")>-1){response.innerHTML=`casualty grab your wrist:<br>clench fist of your grasped hand,<br>hold clench fist with other hand,<br>pull the fist upwards (against direction of casualty's thumb)<br>swim out of reach adopt defensive position.<br>(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("front")>-1&&input.toLowerCase().indexOf("grasp")>-1||input.toLowerCase().indexOf("front")>-1&&input.toLowerCase().indexOf("grab")>-1){response.innerHTML=`casualty grab your head, shoulders, or neck<br>Take deep breath, tuck chin to the chest(protect throat);<br>round your back, extend arms against the chest, armpits, waist or hips.<br>if possible, press against casualty's rib cage;<br>duck underwater vigorously away & defensive position.<br>(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("rear")>-1&&input.toLowerCase().indexOf("grasp")>-1||input.toLowerCase().indexOf("rear")>-1&&input.toLowerCase().indexOf("grab")>-1){response.innerHTML=`casualty grab from behind<br>Take deep breath, tuck chin to the chest(protect throat);<br><b>method 1</b>grasp casualty's elbows push up rapid vigorously<br>duck underwater vigorously away & defensive position.<br><b>method 2</b>casualty grasp your arms or waist, use free hand to exert pressure on casualty's finger or thumb,<br>push your elbows outwards, force casualty's arms wide,<br>escape & defensive position.<br>(Reference from SLSS manual)`;return;}

//s3-rescue-defense***
//s3-rescue-support*
else if(input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("shallow water")>-1||input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("shallow")>-1){response.innerHTML=`[] holding one arm under the small of back/the neck of the casualty; OR
[] both hands under armpits from behind casualty [] elevate a conscious casualty shoulder level water to help calm him.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("deep water")>-1||input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("deep")>-1){response.innerHTML=`[] from the side; [] holding the neck and supporting the jaw;
[] with buoyant aid, rest casualty's neck over elbow joint of the buoyant-aid-holding-arm;
[] support the chin with the other hand.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("position")>-1||input.toLowerCase().indexOf("support")>-1&&input.toLowerCase().indexOf("positioning")>-1){response.innerHTML=`reached point of safety e.g.pool's edge, shore: [] position casualty facing the bank. [] press both arms against casualty's armpits, firm grip on bank support [] one knee may be able to provide additional support. [] casualty head may rest on your shoulder keeping a clear airway.(Reference from SLSS manual)`;return;}
//s3-rescue-support***
//s3-rescue-landings
else if(input.toLowerCase().indexOf("landing")>-1&&input.toLowerCase().indexOf("types")>-1){response.innerHTML=`Gentle slope @ shore, beach, shallow beach.<br>-walk out, assisting casualty.<br>-drag(pull ashore)<br>-shoulder carry<br>-pick-a-back carry<br>Steep slop @ river, dam, swimming pool, jetty<br>-stirrup lift<br>-assisted lift<br>-straight arm lift.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("landing")>-1&&input.toLowerCase().indexOf("walk out")>-1){response.innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>-walk out,</b><br>slide your head under casualty's armpit, put one arm around casualty's waist;<br>walk beside casualty providing support. `;return;}

else if(input.toLowerCase().indexOf("landing")>-1&&input.toLowerCase().indexOf("pull ashore")>-1){response.innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>-drag (pull ashore),</b><br>float casualty as close as possible<br>walk backwards, supporting under the armpits keep mouth clear of water<br>resuscitation frequent intervals if necessary.`;return;}

else if(input.toLowerCase().indexOf("assisted carry")>-1){response.innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>assisted carry</b><br>rescuer one supports casualty under armpits<br>rescuer two support the legs and carry casualty ashore<br>lower casualty gently on the ground`;return;}

else if(input.toLowerCase().indexOf("shoulder carry")>-1&&input.toLowerCase().indexOf("lift")>-1){response.innerHTML=`For gentle slope @ shore, beach, shallow beach.<br><b>shoulder carry</b><br>over long distance, shallow water, over debris or rough shoreline<br>for speedy safe exit and leaves one hand free<br><b>how</b>-at waist depth water, float casualty face up<br>grasp wrist of casualty's outer arm using your arm that's facing casualty's feet.<br>turn towards casualty's feet, lift grasped arm to roll casualty<br>slide free hand between casualty's legs grasp back of leg above the knee<br>submerge both shoulders beneath the surface<br>pull the grasped wrist down,<br>stand upright using legs, not the back, holding wrist and back of casualty legs while doing it.<br>transfer wrist to the hand holding back of the leg`;return;}

else if(input.toLowerCase().indexOf("shoulder carry")>-1&&input.toLowerCase().indexOf("lower")>-1){response.innerHTML=`hold casualty's legs with an arm around thigh and grasp casualty's wrists with the other hand<br>kneel on knee nearer to casualty's head, keeping back straight doing it<br>sit casualty on your raised knee<br>transfer the back leg hand to around the waist<br>lower casualty to ground sitting position<br>take the wrist arm around your neck and lower the casualty to lying position from there`;return;}

else if(input.toLowerCase().indexOf("pick a back carry")>-1&&input.toLowerCase().indexOf("lift")>-1){response.innerHTML=`stand in chest depth water<br>float casualty in front of you facing you<br>grasp casulty's left wrist with your left hand, right wrist with your right hand<br>turn sharply around under the far arm and pull casualty's chest onto your shoulders<br>wade ashore leaning forward from the hips, supporting casualty's weight across both shoulders`;return;}

else if(input.toLowerCase().indexOf("pick a back carry")>-1&&input.toLowerCase().indexOf("lower")>-1){response.innerHTML=`kneel and lean foward slowly onto both elbows<br>lower casualty gently on the ground`;return;}

else if(input.toLowerCase().indexOf("stirrup lift")>-1){response.innerHTML=`move to side or behind casualty<br>in shallow water, cup hands agains one knee, OR<br>in deep water, cup one hand, other hand firm grip on the bank<br>casualty instructed to place one foot in the stirrup hand and leave the water `;return;}

else if(input.toLowerCase().indexOf("assisted lift")>-1&&input.toLowerCase().indexOf("3")>-1||input.toLowerCase().indexOf("assisted lift")>-1&&input.toLowerCase().indexOf("three")>-1){response.innerHTML=`<b>perform by 2, 3</b> or 4 people;<br>lifesave control and organise the lift;<br>casualty face bank;<br>rescuer to bystander:"hold both casualty's hands", lifesaver get out the water;<br>lifesaver to bystander:"hold one hand"<br>rescuer hold other hand turn casualty face the water, back against bank;<br>both lift casualty and sit at edge;<br>ask 2nd bystander to carry casualty's legs<br>coordinate the lift and lower in a safe place.<br><b>for 3 man lift,</b> both lifter slide elbow under casualty's each armpit, grasp the wrist;<br>free hand clasp wrist holding arm or balance support standing up`;return;}

else if(input.toLowerCase().indexOf("assisted lift")>-1&&input.toLowerCase().indexOf("2")>-1||input.toLowerCase().indexOf("assisted lift")>-1&&input.toLowerCase().indexOf("two")>-1){response.innerHTML=`<b>perform by 2,3</b> or 4 people;<br>lifesave control and organise the lift;<br>casualty face bank;<br>rescuer to bystander:"hold both casualty's hands", lifesaver get out the water;<br>lifesaver to bystander:"hold one hand"<br>rescuer hold other hand turn casualty face the water, back against bank;<br>both lift casualty and sit at edge, pull until legs straighten on bank;<br>coordinate the lift and lower in a safe place.<br><b>for 2 man lift,</b> lifter grab casualty's wrists beneath folded arms;<br>from squating position, body against casualty's back for spinal support; balance standing up`;return;}

else if(input.toLowerCase().indexOf("assisted lift")>-1&&input.toLowerCase().indexOf("un")>-1||input.toLowerCase().indexOf("unassisted lift")>-1&&input.toLowerCase().indexOf("one")>-1){response.innerHTML=`Not recommended by SLSS;<br>unless highly trained strong lifesaver;<br>just secure casualty in safe position, in support position; wait for assistance`;return;}
//s3-rescue-landings***
//s3-rescue***
//s4-resuscitation*
else if(input.toLowerCase().indexOf("steps")>-1&&input.toLowerCase().indexOf("resusci")>-1||input.toLowerCase().indexOf("steps")>-1&&input.toLowerCase().indexOf("reviv")>-1){response.innerHTML=`
D-check for Danger;<br>R-check for Response;<br>S-Shout "call 995 ambulance and get AED from bystanders;<br>A-head tilt chin lift check Airway;<br>B-10sec check for Breathing;<br>C-chest Compression;<br>D-Defribrillator asap.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("danger")>-1&&input.toLowerCase().indexOf("check")>-1||input.toLowerCase().indexOf("danger")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`Lookout for dangerous situations, ensure rescuer safety.<br><b>Danger</b> - examples live wire, gas smell, objects on the ground or water that could injure both person.<br>What should rescuer do to clear danger,<br>whatever action, rescuer assess if can be done safely and within his capability<br>for test purpose, rescuer shout Clear before landing the casualty.`;return;}

else if(input.toLowerCase().indexOf("response")>-1&&input.toLowerCase().indexOf("check")>-1||input.toLowerCase().indexOf("response")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`Tap casualty's shoulders firmly and ask:<br><b>"Hello! Hello! Are you OK?"</b><br>Ask loudly in a clear tone of voice<br><b>Tap firm</b>, not too much force that cause injuries to casualty,<br>Note: e.g.casualty has cuts or wounds on shoulder already.<br>For suspected spinal injury, do not tap or shake victim unnecessarily, instead <b>lightly squeeze the shoulder</b> to check for response.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("shout")>-1&&input.toLowerCase().indexOf("help")>-1||input.toLowerCase().indexOf("shout")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`<b>"Call 995 for ambulance"</b>(to first person)<br><b>"Get an AED back to me"</b>(to second person)<br>Note: rescuer point to person, say out clear instructions.<br>If rescuer is alone, only get AED if its visible and nearby.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("airway")>-1&&input.toLowerCase().indexOf("clear")>-1||input.toLowerCase().indexOf("airway")>-1&&input.toLowerCase().indexOf("tilt")>-1||input.toLowerCase().indexOf("airway")>-1&&input.toLowerCase().indexOf("open")>-1){response.innerHTML=`<b>Head tilt (5 fingers) chin lift (2 fingers)</b><br>Kneel to one side of casualty with one hand high on casualty's forehead<br>Apply other hand with 2 fingers(with index and middle finger) at the chin/jaw.<br>Keep all fingers clear of the soft tissues of the casualty's neck and throat.<br>tilt casualty's head back with one hand and support the chin with the other.<br>Note: The tongue is the most common cause of blockage of the airway, this maneuvour is to keep tongue well clear of the airway.<br><b>Look for foreign object in the mouth, remove</b> such object if seen.  Dentures should be remove if they are loose.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("breath")>-1&&input.toLowerCase().indexOf("check")>-1||input.toLowerCase().indexOf("breath")>-1&&input.toLowerCase().indexOf("how")>-1){response.innerHTML=`Maintain head tilt chin lift position,<br><b>Place one ear near casualty's mouth to listen and feel for air<br>Look for rise and fall of chest for 10 seconds.<br>Count loudly-One thousand, Two thousand till Ten thousand.</b><br>Breathing present-place casualty in recovery position to ensure adequate airway and drainage of vomit.<br>Monitor breathing until medical help arrives.<br>Criteria of breathing, chest movement, air entering and leaving mouth/nostrils<br>non-breathing-gasping for air is where chest movement present, but no air leaving (agonal breathing)(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("compression")>-1&&input.toLowerCase().indexOf("how")>-1||input.toLowerCase().indexOf("compression")>-1&&input.toLowerCase().indexOf("count")>-1||input.toLowerCase().indexOf("compression")>-1&&input.toLowerCase().indexOf("technique")>-1){response.innerHTML=`<b>Place heel of hand</b>(hand nearer victim's head) <b>onto sternum.<br>place heel of other hand over the sternum positioned hand by finger-holding method.</b><br>30 chest compressions and 2 ventilations:<br><b>1 and 2 and 3 and 4 and 5<br>1 and 2 and 3 and 4 and 10<br>1 and 2 and 3 and 4 and 15<br>1 and 2 and 3 and 4 and 20<br>1 and 2 and 3 and 4 and 25<br>1 and 2 and 3 and 4 and 30</b><br>timing:(push down as you say "number", release as you say "and")<br>depth:(compression depth between 4-5cm)<br>rate:(100-120 press per minute).(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("compression")>-1&&input.toLowerCase().indexOf("child")>-1||input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("child")>-1||input.toLowerCase().indexOf("child")>-1&&input.toLowerCase().indexOf("technique")>-1){response.innerHTML=`1 - 8years old;<br>use only <b>one hand compressions</b>;<br>compression depth 2.5-4cm;<br>compression rate: 100 per minute same as infants. (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("compression")>-1&&input.toLowerCase().indexOf("infant")>-1||input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("infant")>-1||input.toLowerCase().indexOf("infant")>-1&&input.toLowerCase().indexOf("technique")>-1){response.innerHTML=`<b>below 1 years</b><br>compression point 1 finger below nipple line<br>compress with <b>2/3 fingers</b> on sternum<br>compression <b>depth: 1.5-2.5cm</b><br>compression rate: 100 per min;<br>blow into nose and mouth</b> (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("resuscit")>-1&&input.toLowerCase().indexOf("types")>-1||input.toLowerCase().indexOf("resuscit")>-1&&input.toLowerCase().indexOf("technique")>-1){response.innerHTML=`mouth-to-mouth<br>mouth-to-nose<br>mouth-to-mouth & nose(on infants)<br>mouth-to-mask.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("ventilation")>-1&&input.toLowerCase().indexOf("how")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("breath")>-1||input.toLowerCase().indexOf("resuscitation mouth")>-1){response.innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth:</b><br>take a breath, seal your mouth over casualty's open mouth<br>pinch the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose,<br>one ear close to casualty's mouth and nose to check airflow and chest movemnent. (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("ventilation")>-1&&input.toLowerCase().indexOf("nose")>-1||input.toLowerCase().indexOf("mouth")>-1&&input.toLowerCase().indexOf("nose")>-1||input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("nose")>-1){response.innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose</b>: take a breath, seal your mouth over casualty's nose and your thumb closes the mouth and blow until chest starts to rise,<br>turn you head, one ear close to casualty's mouth, thumb release from mouth to check correct check airflow and chest movemnent.
<br><b>When use</b><br>*rescuer's preference,<br>*water resuscitation,<br>*when jaw is clenched,<br>*by child on adult,<br>*mouth-to-mouth cannot be use, e.g. wounds at the mouth. (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("ventilation")>-1&&input.toLowerCase().indexOf("child")>-1||input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("child")>-1||input.toLowerCase().indexOf("resuscitation")>-1&&input.toLowerCase().indexOf("child")>-1){response.innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth: take a breath, seal your mouth over casualty's open mouth by pinching the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose, one ear close to casualty's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required. (Reference from SLSS manual) (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("ventilation")>-1&&input.toLowerCase().indexOf("infant")>-1||input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("infant")>-1||input.toLowerCase().indexOf("resuscitation")>-1&&input.toLowerCase().indexOf("infant")>-1){response.innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose and mouth: take a breath, seal your mouth over infant's open mouth and nose and blow until chest starts to rise,<br>turn you head,  one ear close to infant's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required.  Over-extension of the head should be avoided for infants.(Reference from SLSS manual) `;return;}

else if(input.toLowerCase().indexOf("ventilation")>-1&&input.toLowerCase().indexOf("mask")>-1||input.toLowerCase().indexOf("pocket")>-1&&input.toLowerCase().indexOf("mask")>-1||input.toLowerCase().indexOf("resuscitation")>-1&&input.toLowerCase().indexOf("mask")>-1){response.innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mask: take a breath, seal your mask over casualty's open mouth and nose by pressing both thumbs down on the mask and blow until chest starts to rise,<br>turn you head, look for vapour expired in the mask to check airflow and chest movemnent.<br>use of mask is recommended for prevention of infection, vomitting casualty. (Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("2 man")>-1||input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("two man")>-1||input.toLowerCase().indexOf("two man")>-1&&input.toLowerCase().indexOf("resuscitation")>-1){response.innerHTML=`one man does EAR, one does compression<br>fatigued compression rescuer calls for a switch on 5th cycle compression<br>"SWITCH and 2 and 3 and 4 and 30", EAR rescuer gives last 2 blows then switch to Compression rescuer, Compression rescuer becomes EAR rescuer.(Reference from SLSS manual)`;return;}

else if(input.toLowerCase().indexOf("fbao")>-1&&input.toLowerCase().indexOf("adult")>-1||input.toLowerCase().indexOf("fbao")>-1&&input.toLowerCase().indexOf("conscious")>-1||input.toLowerCase().indexOf("choking")>-1&&input.toLowerCase().indexOf("adult")>-1){response.innerHTML=`Recognise FBAO;<br>Ask "Are you choking?"<br> Do not body contact until casualty agrees rescue.<br>Ask "Can you speak, can you breathe, can you cough?"<br>"I can help, do you want me to help?"<br>move behind casualty, one leg between (standing support to break fall) casualty.<br><b>landmark</b>: locate navel using 2 finger, make a fist thumb in palm, place thumb side of fist agst abdomen 2 fingers above navel, lean casualty forward with one hand<br><b>thrusts</b>: with other hand, grasp fist, quick inward, upward thrusts into abdomen. Until foreign body is expelled or casualty become unconscious.(Reference from SLSS manual)`;return;}
//s4-resuscitation***
//s5-emergency care*
//else if(input.toLowerCase().indexOf("")>-1&&input.toLowerCase().indexOf("")>-1||input.toLowerCase().indexOf("")>-1&&input.toLowerCase().indexOf("")>-1){response.innerHTML=`.(Reference from SLSS manual)`;return;}
//s5-emergency care***
//s6-anatomy & physiology*
else if(input.toLowerCase().indexOf("respiratory system")>-1&&input.toLowerCase().indexOf("explain")>-1||input.toLowerCase().indexOf("respiratory system")>-1&&input.toLowerCase().indexOf("what")>-1){response.innerHTML=`We are respiratory organisms, every cell in the body needs oxygen for survival.  Our respiratory system consists of all organs, tissues and structures that facilitates breathing.  Respiratory failures or malfunctions are considered emergencies.  Reference from SLSS manual`;return;}
//s6-anatomy & physiology***

//s7-legal aspects*
else if(input.toLowerCase().indexOf("lifesaver")>-1&&input.toLowerCase().indexOf("define")>-1||input.toLowerCase().indexOf("lifesaver")>-1&&input.toLowerCase().indexOf("legal")>-1){response.innerHTML=`"lifesaver" generally refers to volunteer or rescuers, including bystanders.  However, professional lifeguards are subjected to higher responsibilities under the law.<br> (e.g. Duty of care, Negligence, Tort, Battery). Reference from SLSS manual`;return;}

else if(input.toLowerCase().indexOf("tort")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("tort")>-1&&input.toLowerCase().indexOf("consequence")>-1){response.innerHTML=`In law, if tort is proven, it means a wrong done by the wrongdoer, is under legal obligation to compensate the injured party. <br>Reference from SLSS manual`;return;}

else if(input.toLowerCase().indexOf("negligen")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("negligen")>-1&&input.toLowerCase().indexOf("consequence")>-1){response.innerHTML=`Tort of negligence = "the breach of a legal duty of care which results in damage to the claimant" (Winfield & Jolowicz on Tort, 17th Ed.(2006)page132 )<br>basic requirements of negligence:-<br>a) proof duty of care;<br>b) breach of duty of care;<br> c) damage suffered by victim as a result of breach. Reference from SLSS manual`;return;}

else if(input.toLowerCase().indexOf("duty of care")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("duty of care")>-1&&input.toLowerCase().indexOf("consequence")>-1){response.innerHTML=`For lifesavers, "reasonable" standard of duty of care established by the following factors, plus any prevailing circumstances:-<br>a) the evidence of experts (e.g. lifesaving teachers, examiners);<br> b) what other organisations or other people do (e.g. RLSS, SLSAA);<br>c) amount of training the person has (e.g. BM, AM, DA);<br>d) the policies, procedures, rules or standards set by SLSS or other life saving organisations;<br>e) Life saving text books or manuals;<br>f) the standards set in similar fields;<br>g) the information of risk which was available to the lifesaver;<br>h) requirements and standards set by law or legislation;<br>Ref: Alert:Lifeguarding by the RLSS Canada 1993,page 106.`;return;}

else if(input.toLowerCase().indexOf("battery")>-1&&input.toLowerCase().indexOf("what")>-1||input.toLowerCase().indexOf("battery")>-1&&input.toLowerCase().indexOf("consequence")>-1||input.toLowerCase().indexOf("rescue")>-1&&input.toLowerCase().indexOf("consent")>-1||input.toLowerCase().indexOf("force")>-1){response.innerHTML=`Battery is the direct application of force to another perosn (Windfield & Jolowicz on Tort, 17th Ed.2006 page 88)<br>Before rendering assistance, lifeguard must identify themselves, in life threatening emergencies, the lifeguard should assume <b>consent</b>.  For children, their consent cannot be valid, it is best to obtain consent of both parent and child. `;return;}
//s7-legal aspects***

//s8-life saving syllabus*
else if(input.toLowerCase().indexOf("ear")>-1&&/\bsupported\b/.test(input.toLowerCase())||input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("bank")>-1){response.innerHTML=`supported EAR (Expired Air Resuscitation)<br>5 m away, surface dive(feet first/head first), extended chin tow to wall supported position, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until say stop.`;return;}

else if(input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("unsupported")>-1||input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("deep")>-1){response.innerHTML=`unsupported EAR (Expired Air Resuscitation)<br>surface dive(feet first/head first), extended chin tow to safe zone, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until say stop.`;return;}

else if(input.toLowerCase().indexOf("ear")>-1&&input.toLowerCase().indexOf("shallow")>-1){response.innerHTML=`20m away tow until walking dept water, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until reach pool edge apply supported position continue EAR, until say stop`;return;}

else if(input.toLowerCase().indexOf("lifesaving2")>-1&&input.toLowerCase().indexOf("items")>-1||input.toLowerCase().indexOf("lifesaving2")>-1){response.innerHTML=`rescue 25m deep water > block with aid > reverse > stand off > re-approach > non contact tow > stirrup lift > treatment for shock > RICE.Reference from SLSS manual`;return;}

else if(input.toLowerCase().indexOf("lifesaving3")>-1&&input.toLowerCase().indexOf("items")>-1||input.toLowerCase().indexOf("lifesaving3")>-1){response.innerHTML=`throw/reach conscious first.  tow unconscious > assisted lift > check 10s > 2 blows-EAR > vomitting > secondary injury > recovery. Reference from SLSS manual`;return;}

//*s8-syllabus
else if(input.toLowerCase().indexOf("girl")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("female")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("woman")>-1&&input.toLowerCase().indexOf("lifeguard")>-1){response.innerHTML=`Both sexes can be trained as lifeguards, the reason you observe it seems a male dominant profession is perhaps of the outdoor weather nature of the job.  Gradually, more indoor pools are being built because of lightning risks, and is also lucrative for people looking for better sun protection swimming facilities.`;return;}

else if(input.toLowerCase().indexOf("how to")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("qualif")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("require")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("prerequisite")>-1&&input.toLowerCase().indexOf("lifeguard")>-1){response.innerHTML=`The bronze medalion award is the minimum skill level for majority of entry level lifeguard jobs in Singapore, it does varies between companies employing them. Lifesaving 1,2,3 award is an introductory course suitable for children to appreciate water safety and own safety when dealing with other aquatic users`;return;}	
//*BM	
else if(input.toLowerCase().indexOf("how old")>-1&&input.toLowerCase().indexOf("lifeguard")>-1||input.toLowerCase().indexOf("age")>-1&&input.toLowerCase().indexOf("lifeguard")>-1){response.innerHTML=`Candidates taking the Bronze Medallion which is the minimum aquatic certification for lifeguards in Singapore must be age 14 on the date of examination.  But for taking a lifeguard job, most organisations require the lifeguard to be minimum age 17 to be on the job`;return;}	
		
else if(input.toLowerCase().indexOf("bronze medallion")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("bronze")>-1&&input.toLowerCase().indexOf("medallion")>-1||input.toLowerCase().indexOf("bm")>-1&&input.toLowerCase().indexOf("award")>-1){response.innerHTML=`BRONZE MEDALLION<br>1.Theory test.<br>2.SLSS Resuscitation test.<br>3.Land Based Rescue (instructor-assessed).<br>4.Water Based Rescue (instructor-assessed)-conscious casualty 50m from safety.<br>5.Rescue fitness(3min15sec)-conscious casualty 50m from safety, non-contact clothing tow to support position.<br>6.Contact tow-conscious casualty 50m from safety.<br>7.Resuscitation rescue-unconscious submerge casualty 15m from safety(1min15sec support position)<br>8.Initiative-2 casualties 20m from safety.<br>9.swim 400m, min 3 different strokes(free, breast, survival, side recommended) `;return;}	
//*BM
//*POOL LIFEGUARD
else if(input.toLowerCase().indexOf("lifeguard")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("lifeguard")>-1&&input.toLowerCase().indexOf("cert")>-1||input.toLowerCase().indexOf("lifeguard")>-1&&input.toLowerCase().indexOf("test")>-1){response.innerHTML=`POOL LIFEGUARD Award-brief key points<br>Minimum age: 16 years old<br>Pre-requisites: Bronze Medallion<br>1.Theory Test<br>2.Operating, maintenance, troubleshoot oxgyen resuscitators<br>3.valid SLSS CPR or Senior Resuscitation award<br>4.Contact tow-casualty 25m from safety(1min 20sec)<br>5.Resuscitation rescue-unconscious non-breathing casualty at bottom of 1.8m pool, 10m from safety.<br>Double rescue-2 casualty locked together 10m from safety.M<br>Releases-fr rear, front body, front shoulders<br>Spinal injury-2 bystanders assist<br>9.initiative-2 casualties<br>10.swim fitness-400m 11min(free, breast, side, survival  back)`;return;}
//*POOL LIFEGUARD	
//*AM
else if(input.toLowerCase().indexOf("am")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("merit")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("am")>-1&&input.toLowerCase().indexOf("skills")>-1){response.innerHTML=`MERIT Award-brief key points<br>Minimum age: 15 years old<br>Pre-requisites: Bronze Medallion<br>1.Theory test.<br>2.valid SLSS Senior Resuscitation award.<br>3.Rescue fitness(5min)-conscious casualty 75m from safety, non-contact clothing tow to support position.<br>4.Contact tow-conscious casualty 25m away 75m from safety.<br>5.Resuscitation rescue-unconscious submerge casualty 30m from safety(1min first inflation)<br>6.Initiative-2 casualties 25m from safety.<br>7.swim 600m, min 3 different strokes(free-breast-survival back-side, 3 sets 50m each stroke)`;return;}
//*AM
//*DA
else if(input.toLowerCase().indexOf("da")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("distinction")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("da")>-1&&input.toLowerCase().indexOf("skills")>-1){response.innerHTML=`DISTINCTION Award-brief key points<br>Minimum age: 16 years old<br>Pre-requisites: Award of Merit<br>1.Theory test.<br>2.valid SLSS Senior Resuscitation award.<br>3.Rescue fitness(6min)-conscious casualty 100m from safety, non-contact clothing tow to support position.<br>4.Contact tow-conscious casualty 50m away 100m from safety.<br>5.Resuscitation rescue-unconscious submerge casualty 45m from safety(1min 15sec first inflation)<br>6.Initiative-3 casualties 25m from safety.<br>7.swim 800m, min 4 different strokes(free-breast-survivalBack-side, 4 sets 50m each stroke)`;return;}
//*DA***
//*SLSS CPR**
else if(input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("resuscitation")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("cpr")>-1&&input.toLowerCase().indexOf("cert")>-1){response.innerHTML=`STANDARD RESUSCITATION Award-brief key<br>1.Theory test.<br>2.CPR-demostrate on adult/child manikin(may mouth-mouth and mouth-nose)<br>3.Airway Obstruction (conscious, unconscious).<br>4.Initiative (DRS-ABC,recovery)`;return;}
//*SLSS CPR***

//SNR RESUSCITATION*
else if(input.toLowerCase().indexOf("snr resus")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("senior resuscitation")>-1&&input.toLowerCase().indexOf("award")>-1||input.toLowerCase().indexOf("senior")>-1&&input.toLowerCase().indexOf(" resuscitation")>-1){response.innerHTML=`SENIOR RESUSCITATION Award-brief key<br>1.Theory test.<br>2.CPR-demostrate on adult/child manikin(mouth-mask)<br>3.One rescuer CPR, Two rescuer CPR (mouth-mask)<br>4.Airway Obstruction (conscious, conscious-unconscious, unconscious).<br>5.Initiative (DRS-ABC,recovery)`;return;}
//SNR RESUSCITATION***

//RAMS*
else if(input.toLowerCase().indexOf("risk")>-1&&input.toLowerCase().indexOf("assess")>-1){response.innerHTML=`Suggested RAMS:<br>WHAT - learning objective, equipment, lifeguards availabe, insurance, food, PARQ, alternatives<br>WHO - teacher student ratio, parents, caregiver, public<br>WHERE - venue, nature(sea, mountains)<br>WHEN - appropriate duration with fitness, opening hours<br>WEATHER - nea app, replacement, alternative lessons, treatment hypothermia/hyperthermia)`;return;}

else if(input.toLowerCase().indexOf("rams")>-1&&input.toLowerCase().indexOf("plan")>-1||input.toLowerCase().indexOf("rams")>-1&&input.toLowerCase().indexOf("content")>-1){response.innerHTML=`Suggested RAMS content:<br>Safety Briefing<br>Participant questions<br>Medical declaration<br>Environment check<br>Equipment check<br>Facility check<br>Weather check<br>Accident<br>Treatment<br>Report`;return;}
//RAMS***
//*s8-syllabus**

//s8-life saving syllabus***
//else if(input.toLowerCase().indexOf("")>-1&&input.toLowerCase().indexOf("")>-1||input.toLowerCase().indexOf("")>-1&&input.toLowerCase().indexOf("")>-1){response.innerHTML=`.Reference from SLSS manual`;return;}
	
//	response.innerHTML=`<a href="">mt</a>`;return;}
//else if(/\bx\b/.test(input.toLowerCase())&&input.toLowerCase().indexOf("x")>-1){response.innerHTML=``;return;}
	
//else if(input.toLowerCase().indexOf("xxx")>-1){
//		response.innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
////sample codes***
//"separation' keyword prompt*()

//"chinese' keyword prompt*


//"british' keyword prompt*
else if(input.toLowerCase().indexOf("life")>-1){
	response.innerHTML=" try keyword 'lifeguard' with: award, certification, qualification, age"; return;
}


//"landings" keyword prompt* 
else if(input.toLowerCase().indexOf("landing")>-1){
	response.innerHTML=` try keyword 'landing' with: types, walk out, drag, shoulder carry, pick a back carry, stirrup, assisted lift, straight arm lift, use (lift and lower) with this methods `;
return;
}
}
//else {response.innerHTML = `I do not have information on your input '${inputText}', perhaps you could click our "topics" button above or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:tonboswimmers@gmail.com?&subject=Lifeguard%20ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Tonboswimmers", target="_blank">email</a>`;return;}

response.textContent = `I'm sorry, I don't have information on that topic '${input}'. Or email us what was your question for us to update an appropriate response, tonboswimmers@gmail.com`;
}
