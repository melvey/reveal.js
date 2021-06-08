<!-- .slide: data-background-image=""  data-background-color="black" -->
# Lessons in Arduino flow controller



<!-- .slide: data-background-image=""  data-background-color="black" -->
## Why Arduino


<!-- .slide: data-background-image=""  data-background-color="black" -->
Arduino is cheap

* Nano costs just over $15 from core
* Lots of cheap knock-offs


<!-- .slide: data-background-image=""  data-background-color="black" -->
Arduino is easy (at first)

* Simple IDE
* Uses common languages (C++)
* Lots of helper functions in base libraru
* Lots of external libraries
* Lots of resources outline


<!-- .slide: data-background-image=""  data-background-color="black" -->
Arduino is easy to tinker with

* Lots of great resources on the chip
* Really easy to try an idea on a breadboard or project board



<!-- .slide: data-background-image=""  data-background-color="black" -->
## What I built


<!-- .slide: data-background-image=""  data-background-color="black" -->
I often overflowing pots while brewing

Nothing on the market


<!-- .slide: data-background-image=""  data-background-color="black" -->
* A flow sensor
* A solenoid
* An arduino UNO
* Job done!


<!-- .slide: data-background-image=""  data-background-color="black" -->
But what if it could do more??


<!-- .slide: data-background-image=""  data-background-color="black" -->
My brother pointed out it could also control the rate of flow which is useful for sparging


<!-- .slide: data-background-image=""  data-background-color="black" -->
* A flow sensor
* A solenoid
* An arduino UNO
* A motorised ball valve
* Job done?


<!-- .slide: data-background-image=""  data-background-color="black" -->
Turns out my electronics were crap


<!-- .slide: data-background-image=""  data-background-color="black" -->
Turns out my code was crap



<!-- .slide: data-background-image=""  data-background-color="black" -->
## Problems with Arduino


<!-- .slide: data-background-image=""  data-background-color="black" -->
Terrible IDE

Notes:
* Build process doesn't play well with other editors
* Doesn't work in sway
* Encouraged to use clunky .ino files


<!-- .slide: data-background-image=""  data-background-color="black" -->
Limited base library

* Great shortcuts in base library but they come at a cost
* Much larger build files
* Less efficient
* Cannot hijack internal resources without breaking things



<!-- .slide: data-background-image=""  data-background-color="black" -->
## Writing proper C++ in the Arduino IDE
* Getting away from .ino files
	* The IDE does support .h and .cpp files
	* Permits proper imports



<!-- .slide: data-background-image=""  data-background-color="black" -->
## Escapting the Arduino IDE
* AVR-GCC
* AVRDUDE


<!-- .slide: data-background-image=""  data-background-color="black" -->
Using a makefile I can go back to my IDE of choice


<!-- .slide: data-background-image=""  data-background-color="black" -->
Code is a bit different without the libs


<!-- .slide: data-background-image=""  data-background-color="black" -->
Code is a bit different without the libs
```
digitalWrite(solenoidPin, HIGH);
```
becomes
    
```
	PORTB = PORTB | (1<<SOLENOID_PIN);
```


<!-- .slide: data-background-image=""  data-background-color="black" -->
But I can do more


<!-- .slide: data-background-image=""  data-background-color="black" -->
The flow sensor now writes directly to an internal counter

```
	// init counter to count up and increment on external pin T1 rising edge
	TCCR1A = 0x00;
	TCCR1B = 0x07; // 0x00 | (1<<CS12) | (1<<CS11) | (1<<CS10)
```


<!-- .slide: data-background-image=""  data-background-color="black" -->
That breaks the timer - so make one with longer ticks

```
//setup Timer 0
TCCR0B |= (1 << CS02) | (1 << CS00); //prescaler set to 1/1024. Counter will overflow ever 16 ms
TIMSK0 |= (1 << TOIE0); // Enable Timer 0 overflow interupt

ISR(TIMER0_OVF_vect){
	//Timer 0 overflows every 16ms. Capturing 125 of these gives us a 2 s interval.
	overflows ++;
	if(overflows >= 125){
		//Get timer 1 count and record it
		overflows = 0;

		newTicks = TCNT1;
		updateTicks = 1;
	}
}
```


<!-- .slide: data-background-image=""  data-background-color="black" -->
This gives a more accurate volume count with less overhead



<!-- .slide: data-background-image=""  data-background-color="black" -->
## What now?


<!-- .slide: data-background-image=""  data-background-color="black" -->
I've had to completely rewrite my serial read/write code


<!-- .slide: data-background-image=""  data-background-color="black" -->
Write isn't quite as easy as I hoped

* Dynamic memory is discouraged in microcontrollers
* String parsing is a bit more complicated than my original implementation


<!-- .slide: data-background-image=""  data-background-color="black" -->
I'm now back to square one with the flow rate control
