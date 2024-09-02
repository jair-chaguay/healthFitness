import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCardContent,IonCardTitle,IonCardHeader,IonCard} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCardContent,IonCardTitle,IonCardHeader,IonCard]
})
export class Tab2Page implements OnInit{
  exercises =[    {
    "name": "Skating",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "other",
    "difficulty": "beginner",
    "instructions": "Roller skating is a fun activity which can be effective in improving cardiorespiratory fitness and muscular endurance. It requires relatively good balance and coordination. It is necessary to learn the basics of skating including turning and stopping and to wear protective gear to avoid possible injury. You can skate at a comfortable pace for 30 minutes straight. If you want a cardio challenge, do interval skating â€“ speed skate two minutes of every five minutes, using the remaining three minutes to recover. A 150 lb person will typically burn about 175 calories in 30 minutes skating at a comfortable pace, similar to brisk walking."
},
{
    "name": "Recumbent Bike",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "machine",
    "difficulty": "beginner",
    "instructions": "To begin, seat yourself on the bike and adjust the seat to your height. Select the desired option from the menu. You may have to start pedaling to turn it on. You can use the manual setting, or you can select a program to use. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. The level of resistance can be changed throughout the workout. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity. Recumbent bikes offer convenience, cardiovascular benefits, and have less impact than other activities. A 150 lb person will burn about 230 calories cycling at a moderate rate for 30 minutes, compared to 450 calories or more running."
},
{
    "name": "Sled push-",
    "type": "cardio",
    "muscle": "hamstrings",
    "equipment": "other",
    "difficulty": "beginner",
    "instructions": "Place your sled on an appropriate surface, loaded to a suitable weight. The sled should provide enough resistance to require effort, but not so heavy that you are significantly slowed down. You may use the upright or the low handles for this exercise. Place your hands on the handles with your arms extended, leaning into the implement. With good posture, drive through the ground with alternating, short steps. Move as fast as you can for a short distance."
},
{
    "name": "Fast Kick With Arm Circles",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "body_only",
    "difficulty": "beginner",
    "instructions": "Start with your feet hip-width apart and arms straight out by your side. Your arms should be parallel to the floor with palms facing down. This is your starting position. Start to make small, forward circles with each arm, at the same time. As you're doing this, kick your right foot forward, and then quickly alternate by bringing your right foot back down and your left foot forward. Repeat for the recommended amount of repetitions."
},
{
    "name": "Defensive Slide",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "body_only",
    "difficulty": "beginner",
    "instructions": "Begin in an athletic position with your knees bent and your chest up. Your arms should be in front of your body. Shuffle laterally to the right by stepping sideways with your right foot and bringing the left to match. As the left foot meets your right, shuffle sideways again. Once you've taken 2-3 shuffles, change direction and move to the left. Repeat."
},
{
    "name": "Vertical Mountain Climber",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "body_only",
    "difficulty": "beginner",
    "instructions": "From a standing position, raise your left hand reaching as high as you can, while driving your right knee up in a similar movement to a traditional mountain climber. Switch by pulling down with your left hand and reaching high with your right hand. At the same time, let your right foot fall to the floor, then drive with your lift knee up. Repeat for the recommended amount of repetitions."
},
{
    "name": "Football Up-Down",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "body_only",
    "difficulty": "beginner",
    "instructions": "Start with your feet shoulder-width apart and arms bent at your sides. Begin to quickly move your feet, as if you were running in place, while keeping your hands in front of you. Maintain this intensity for 5 seconds. Next, drop down to the floor in a push up position, letting your abdomen come in contact with the floor. Quickly push up with your arms and bring your feet towards your body to get back up to the starting position. Repeat for the recommended amount of repetitions or time."
},
{
    "name": "Slow Jog",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "body_only",
    "difficulty": "beginner",
    "instructions": "Begin standing with your feet shoulder-width apart. Your arms should be bent and at your sides. Lift your right knee up until it reaches your waist. Your left arm should swing forward while your right arm swings back. Keep your left knee slightly bent and allow it to spring. Return your right foot to the ground as you lift your left knee. Swing your right arm forward and your left arm back. Keep your right knee slightly bent and allow it to spring. Repeat."
},
{
    "name": "Double Under",
    "type": "cardio",
    "muscle": "quadriceps",
    "equipment": "other",
    "difficulty": "beginner",
    "instructions": "From a standing position, grasp a rope handle in each hand and place your feet in front of the jump rope, so the rope rests on the ground behind your heels. Hold your arms down at arm's length, tucking your elbows into your sides and bring your hands up so your forearms are parallel to the ground. This will be your starting position. Begin the exercise by swinging the rope up and over your head, utilizing wrist and shoulder rotation; jump as the rope approaches your feet. Every third rotation, jump a little higher and whip the wrists as fast as you can, causing the rope to pass under you twice before the jump is complete."
}]
  activityLevel: string = 'moderado'; // Cambia esto según el nivel de actividad del usuario
  caloriesNeeded: number = 2000; // Puedes ajustar esto en función del usuario
  daysOfWeek: { name: string, exercises: { name: string; type: string; muscle: string; equipment: string; difficulty: string; instructions: string;}[] }[] = [];

  ngOnInit() {
    this.updateDaysOfWeek();
  }

  updateDaysOfWeek() {
    // Configuración fija para nivel 'moderado'
    this.daysOfWeek = [
      { name: 'Lunes', exercises: this.exercises.slice(0, 2) },
      { name: 'Martes', exercises: this.exercises.slice(1, 3) },
      { name: 'Miércoles', exercises: this.exercises.slice(0, 2) },
      { name: 'Jueves', exercises: this.exercises.slice(1, 3) },
      { name: 'Viernes', exercises: this.exercises.slice(0, 2) },
    ];
  }
}
