navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
  element.addEventListener("click", function(){
  navbar.forEach(nav=>nav.classList.remove("active"))

    this.classList.add("active");
})
});

// Buttons
function change_Dog(){

    document.getElementById("DogDos").innerHTML = `
        <li>Do keep your dog under effective controls</li>
        <li>Do attend regular dog training classes</li>
        <li>Do clean up after your dog</li>
        <li>Do exercise your dog regularly</li>
        <li>Do keep your dog fed and groomed</li>
        <li>Don't leave your dog unattended in a vehicle</li>
        <li>Do teach your children and others how to interact with your dog</li>
    `;

    document.getElementById("DogDonts").innerHTML = `
    <ul class="circle">
        <li>Don't take your dog to places they are explicitly barred</li>
        <li>Don’t overfed</li>
        <li>Don’t Skip Regular Vet Visits</li>
        <li>Don’t let them near to heat-absorbing surfaces like metal or asphalt.</li>
        <li>Don’t feed your pets with excessive treats as it may fill them but will not be providing the nutrition needed by their body</li>
    </ul>    
    `;

    document.getElementById("DogPT").innerHTML = `
    There are two common methods of training a dog.<br><br>
    The first is the aversive-based method. The second is the reward-based method. Aversive-based (discipline) training is when you use positive punishment and negative reinforcement techniques with your dog. Reward-based methods use rewards only for the behaviors that you want your dog to follow.<br><br>
    Aversive-based training uses techniques like loud, unpleasant noises, physical corrections, and harsh scoldings to get your dog to act the way you want. On the other hand, reward-based training uses rewards whenever your dog does something you want it to do. Treats, belly rubs, or other dog-pleasing actions are used to reinforce that a behavior was good.   
    `;

    document.getElementById("DogGrooming").innerHTML = `
    Dr. Jamie Richardson, chief of staff at Small Door Veterinary, recommends bathing your dog no more than once a month (unless it comes in contact with a skunk or has a medical condition). Otherwise you risk drying out its skin. When it is time for a bath, Samantha Schwab, a resident pet expert at Chewy, likes the Booster Bath grooming center. She calls it “the ultimate bathing experience without stepping foot inside a groomer’s.” This portable tub takes as much stress and anxiety as possible out of bathing: It comes with a safety harness that gently holds your pet in place, while you get 360-degree access to wash every inch of it quickly and painlessly — which you certainly can’t do in your kitchen sink. The tub also comes in three sizes to fit a variety of breeds.
    `;

    document.getElementById("DogFeeding").innerHTML = `
    Puppies need small, frequent feedings. For the first few months of a puppy’s life, they will need small meals of food throughout the day as they transition from their mother’s milk to solid food. Starting around four months, puppies can begin eating about three times a day, and after that, puppies will quickly graduate to twice-a-day feedings.<br><br>
    Don’t let your dog trick you into more mealtimes with adorable puppy dog eyes. Most dogs only require two meals a day, but if you catch your dog begging, an occasional healthy treat can help.<br><br>
    `;

    document.getElementById("DogFood").innerHTML = `
    Many owners like to feed a raw meat diet to their dogs, and while this can suit some dogs very well, there are some important considerations you need to be aware of. Experienced vet Dr Leigh Davidson suggests the following.
        <ul class="circle">
          <li>Choose human-grade meat as some pet meat and bone products will contain preservatives that can be bad for your dog’s health.</li>
          <li>Practice impeccable food hygiene as the risk of both you and your dog getting a food-borne bacterial infection such as campylobacter or salmonella is high.</li>
          <li>Have a veterinary nutritionist formulate the diet for you. Many raw diets are not balanced appropriately for stage of life or medical conditions.</li>
        </ul>
    `;

    document.getElementById("DogMeds").innerHTML = `
    Over-the-Counter (OTC) Medications That Can be Safe for Dogs
    <ul class="circle">
      <li>Antihistamines. Diphenhydramine (Benadryl®), cetirizine (Zyrtec®), and loratadine (Claritin®)</li>
      <li>Antidiarrheals/Antinauseants. Bismuth subsalicylate (Pepto-Bismol®)</li>
      <li>Loperamide (Imodium®)</li>
      <li>Famotidine (Pepcid AC®) and cimetidine (Tagamet®)</li>
      <li>Steroid sprays, gels, and creams</li>
      <li>Topical antibiotic ointment. Neosporin®</li>
      <li>Anti-fungal sprays, gels, and creams</li>
      <li>Hydrogen peroxide</li>
      <li>Mineral oil</li>
      <li>Artificial tears</li>
    </ul>  
    `;

}

function change_Cat(){

    document.getElementById("DogDos").innerHTML = `
        <li>Do Ask Your Vet About Feeding Habits and Aging</li>
        <li>Do Feed Your Cat the Right Amount</li>
        <li>Do Prioritize Protein</li>
        <li>Do Use Clicker Training</li>
        <li>Do Blink Slowly</li>
        <li>Do Ask for Consent When Petting</li>
    `;

    document.getElementById("DogDonts").innerHTML = `
        <ul class="circle">
        <li>Don't Feed Your Cat Table Scraps</li>
        <li>Don't Feed Your Cat Food Meant for Dogs</li>
        <li>Don’t Use Laser Pointers</li>
        <li>Don’t Reprimand Your Cat</li>
        <li>Don't "free feed" your cat.</li>
        </ul>    
    `;

    document.getElementById("DogPT").innerHTML = `
    As with anything new, it's important to start with the basics first. As tempting as it may be to jump right into training your cat to jump through a hoop, chances are that would end in frustration for both of you. Start with some simple skills to show your cat that training is fun and easy.<br><br>
    Teaching your cat that the "click" means they get a treat is the first step of clicker training. Once your cat understands the click, you may want to try teaching them to sit. Target training is also a good, beginner skill. By starting with these foundation skills, you will be well prepared to progress onto more advanced behaviors.<br><br>
    `;

    document.getElementById("DogGrooming").innerHTML = `
    Work along the lie of her fur, brushing in the direction the coat grows. Brush all over her body, including her chest and abdomen, concentrating on one section at a time to remove dead hair and tangles. A rubber brush can be especially effective for removing dead hair on cats with short fur.
    `;

    document.getElementById("DogFeeding").innerHTML = `
    Cats should eat at least two meals each day, about 12 hours apart. But a breakfast, lunch, afternoon, dinner, and right before bed schedule is an equally great option. If more than 12 hours elapses between meals, the stomach can become hyperacidic causing nausea.
    `;

    document.getElementById("DogFood").innerHTML = `
    Cats are meat eaters, plain and simple. They have to have protein from meat for a strong heart, good vision, and a healthy reproductive system. Cooked beef, chicken, turkey, and small amounts of lean deli meats are a great way to give them that. Raw or spoiled meat could make your cat sick.
    `;

    document.getElementById("DogMeds").innerHTML = `
    <ul class="circle">
        <li>Frontline Plus for Cats </li>
        <li>Drontal Feline</li>
        <li>Clavamox</li>
        <li>DOnsior</li>
        <li>Prednisone</li>
        </ul>  
    `;
}

function change_Bird(){

    document.getElementById("DogDos").innerHTML = `
        <li>Do Clean the cage of the birds 2-3 times a week</li>
        <li>Do set their cage outside to absorb vitamin D from natural sunlight</li>
        <li>Do provide a birdbath for your pet to cool off and to keep themselves clean.</li>
        <li>Do  include more than a seed mixture to your bird's diet</li>
        <li>Do ensure that the bird has been well-socialized</li>
    `;

    document.getElementById("DogDonts").innerHTML = `
        <ul class="circle">
        <li>Don’t allow perches and gravel sheets to become heavily soiled with dropping</li>
        <li>Don’t hesitate to consult your vet as an early diagnosis</li>
        <li>Don’t locate food, grit or water below perches where they may become contaminated with droppings</li>
        <li>Don’t clutter the cage with too many toys restricting the bird’s movement</li>
        <li>Don’t place the cage too close to TV sets or hi-fi speakers</li>
        </ul>    
    `;

    document.getElementById("DogPT").innerHTML = `
    The are types of birds behavioural training. <br><br>
    A cue is a sound or signal that lets your bird know what you would like them to do. At first, your bird won’t understand this, but a cue can be built into training, e.g. a hand signal or noise.<br><br>
    In using A Target, this means orienting a specific body part towards an object. A closed fist is useful for birds as it is easy to hide treats in it. Birds quickly learn to orient their head towards a closed fist. A closed fist is useful for parrots with aggressive behaviour as it allows us to work with a bird in a hands off manner. Additionally, it maintains trust and helps build a positive reinforcement relationship.<br><br>
    Third is A Bridging Stimulus (Bridge). This is a sound or signal that allows the bird to know they performed the behaviour correctly and that positive reinforcement is to follow. This could be the use of a clicker, or the word ‘good’. Timing is key. A bridge should come immediately after the correct behaviour is performed, and before the reward is presented.<br><br>
    Next is Shaping With Approximations. Breaking down desired behaviours into steps, where each step is positively reinforced, and slowly the steps are performed together. If the bird develops problems on the way, go back a step, and once that step is mastered, you can begin to move forward again.<br><br>
    `;

    document.getElementById("DogGrooming").innerHTML = `
    Wing trims help protect against loss or escape of pet birds. Trimming should be done by a trained veterinarian or other individual who is familiar with the type of trim needed. 
    Nail trimming is usually done to prevent scratching of the owner’s skin rather than due to overgrowth of the nails.
    Sometimes excess keratin accumulates on a bird’s beak and needs to be removed. 
    A few vaccines are available for pet birds (notably polyomavirus vaccine), but most caged birds are not routinely vaccinated. If you have questions about the need to vaccinate your bird, you should discuss your concerns with your veterinarian.`;

    document.getElementById("DogFeeding").innerHTML = `
    Provide a varied diet – you should feed your bird a combination of both a high quality commercial food and some natural foods. e.g. fresh fruit, vegetables, seeding grasses, native flowers, green foods etc that are appropriate and safe for the particular bird species.
    <br><br>
    Choose feeders with no sharp edges or points; the design should allow birds to perch away from the food to keep it from becoming soiled. Set up more than one feeder and allow ample space between them to avoid crowding. Choose a feeder with drainage holes, and add a plastic dome to keep seed dry.`;

    document.getElementById("DogFood").innerHTML = `
    Most birds love dark, leafy greens, zucchini and broccoli, as well as other vegetables such as squash, shredded carrots, snow peas, parsley, cucumbers and Romaine lettuce. Avoid avocado, onion and garlic, which can be harmful to them.
    `;

    document.getElementById("DogMeds").innerHTML = `
    <ul class="circle">
        <li>Prepare the dosage in the eyedropper or needleless syringe, following the instructions from your veterinarian.</li>
        <li>Have 2 people available if possible.</li>
        <li>Be sure that there are no other pets or unfamiliar people in the vicinity and that the lights are soft and any sounds (such as music) are soothing and soft. Have a comfortable place to sit or stand as it will take a few moments to get the medication into your bird.</li>
        <li>Lay out any towel or other restraint you will use. You may also want to wear gloves.</li>
        <li>Remove your bird from the cage and, following the instructions provided by your veterinarian, gently restrain your bird. Be very careful not to hold your bird too tightly. You do not want to restrict your bird’s breathing.</li>
        </ul>  
    `;
}

function change_Fish(){

    document.getElementById("DogDos").innerHTML = `
        <li>Do Have your tap water tested for pH, alkalinity, nitrate and phosphate to make sure it is acceptable for aquarium use.</li>
        <li>Do Let a newly set up aquarium run for 2 to 3 days before purchasing your first fish</li>
        <li>Do Test the aquarium water for pH, ammonia and nitrite before adding new fish.</li>
        <li>Do always acclimate new fish purchases before introducing them to your aquarium.</li>
        <li>Do Inspect your fish for health on a regular basis.</li>
    `;

    document.getElementById("DogDonts").innerHTML = `
        <ul class="circle">
        <li>Don't completely tear down your aquarium to clean it.</li>
        <li>Don’t leave the aquarium light on 24/7</li>
        <li>Don’t place your aquarium near a sunny window or in a drafty location.</li>
        <li>Don’t purchase fish on impulse</li>
        <li>Don’t feed more than your fish can consume in under 2 minutes. </li>
        </ul>    
    `;

    document.getElementById("DogPT").innerHTML = `
    Do not reward your fish until it follows your finger. Use repetition and rewards to train your fish quickly. The fastest and most effective way to train your fish is by using food to reward its behavior. With repetition, your fish will learn to associate following your finger with being fed.<br><br>
    Put your finger on the outside of your aquarium tank near your fish. Your goal is to get your fish's attention, and once you get its attention, reward it with food. If your fish responds to your finger right away, award it with food. If your fish does not respond right away, shake your finger until it does notice.
    `;

    document.getElementById("DogGrooming").innerHTML = `
    In order for fish to grow, they must have the proper tank size.Filters remove the uneaten food and waste products from the water, so you can have a nice, clean tank. Filters also grow beneficial bacteria that eat ammonia and break it down to nitrite and eventually, into nitrate, which is much less harmful to fish. Think of the bacteria as neutralizers. Not only do these bacteria's live in the filter, but they also live in the substrate and surfaces within the aquarium
    `;

    document.getElementById("DogFeeding").innerHTML = `
    Herbivorous fish tend to forage throughout the day because it takes a lot more plant material to satisfy their nutritional needs than the amount of meat protein for carnivores.<br><br>
    Omnivorous fish have it best because they have many more options for suitable food items. Predators and specialized feeders eat more when food is abundant, but when it isn't several days may pass between meals. This could explain why aquarium fish readily accept food anytime it's offered; they don't know when their next meal will be! <br><br>
    Carnivorous fish eat less frequently. This is because they are less likely to catch food every day in nature, and their aquarium feeding schedule should match that.
   `;

    document.getElementById("DogFood").innerHTML = `
    <ul class="circle">
        <li><b>Dry Food:</b> When you think of fish food, you think of flakes. That's the most common option for feeding a tankful of fish, but dry fish food also comes in granules and pellets, sinking, and floating varieties, as well as options for specific species. Dry fish food can be lower in fiber, but adding vegetable foods to the diet will help reduce the risk of swim bladder disorders and bloating for vegetarian species. Pet stores may also sell sheets of dried spirulina or nori algae, which are great for herbivorous fish to nibble on.</li>
        <li><b>Frozen Food:</b> Some fish will enjoy frozen food, such as shrimp, bloodworms, plankton, prawn, krill, or mussels. Pet stores often also sell frozen spirulina cubes for feeding herbivores.</li>
        <li><b>Freeze Dried:</b> Tubifex worms and Mysis shrimp or other foods can be found as freeze-dried cubes. These are very nutritious and great for carnivorous fish.</li>
        <li><b>Live Food:</b> Options include live brine or ghost shrimp, feeder fish (for larger carnivorous fish), crickets, and worms.</li>
        <li><b>Greens:</b> If your fish are the type to munch on aquarium plants, such as anacharis, give them greens as well. Options include lettuce, cucumber, zucchini, and spinach. Clip the greens to the side of the tank or fasten them in place near the substrate, but remove or replace the uneaten vegetables within 24 hours. Fish such as plecostomus love to eat fresh greens.</li>
    </ul>  
    `;

    document.getElementById("DogMeds").innerHTML = `
    <ul class="circle">
        <li>API Stress Coat</li>
        <li>API General Cure Powder Medication</li>
        <li>API Super Ick Cure</li>
        <li>Kordon Methylene Blue</li>
        <li>Seachem ParaGuard</li>
    </ul>  
    `;
}