import { Component } from '@angular/core';
import { text } from 'body-parser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  ngOnInit (): void {
    this._runTypingEffect();
  }

  private _runTypingEffect(): void {
    const typingEffectElement = document.getElementById('typing-effect');
    const textToType = '...';

    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout | null = null;

    if (typingEffectElement != null) {
      this._startTypingEffect(textToType, typingTimer, currentIndex, typingEffectElement);
    } else console.error ("ERROR_NULL_VALUE")
  }

  private _startTypingEffect (
    textToType: string,
    typingTimer: NodeJS.Timeout | null,
    currentIndex: number,
    typingEffectElement: HTMLElement
  ): void {
    typingTimer = setInterval(() => {
      const currentText = typingEffectElement.innerText;
      if (currentIndex < textToType.length) {
        typingEffectElement!.innerText = currentText.slice(0, 2) + textToType[currentIndex];
        currentIndex++;
      } else {
        clearInterval(typingTimer!);
        currentIndex = 0; // Reset currentIndex to start typing from the beginning
        typingTimer = setTimeout(() => {
          typingEffectElement!.innerText = currentText.slice(0, 0); // Clear the previous dots
          this._startTypingEffect(textToType, typingTimer, currentIndex, typingEffectElement);
        }, 800) as NodeJS.Timeout; // Delay before starting the typing effect again
      }
    }, 500);
  }

}
