import { Component } from '@angular/core';

@Component({
  selector: 'app-bulls-and-cows',
  templateUrl: './bulls-and-cows.component.html',
  styleUrls: ['./bulls-and-cows.component.css']
})
export class BullsAndCowsComponent {
  title = "Welcome to my first Angular Game!";

    secret = this.generateSecret();
    guess = '';
    result = '';
  
    generateSecret(): string {
      // Generate a random 4-digit number
      return Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');
    }

  
    checkGuess(): void {
      if (this.guess.length !== 4) {
        this.result = 'Your guess must be a 4-digit number.';
        return;
      }
  
      // Count the number of bulls and cows
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < 4; i++) {
        if (this.guess[i] === this.secret[i]) {
          bulls++;
        } else if (this.secret.includes(this.guess[i])) {
          cows++;
        }
      }
  
      // Show the result
      this.result = `${bulls} bulls and ${cows} cows`;
  
      // Reset the guess if it's correct
      if (bulls === 4){
        this.result = 'Your guess is right';
        return;
      }

    }
  
}

  
