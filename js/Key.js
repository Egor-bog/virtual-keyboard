import create from "./utils/create.js";

export default class Key {
    constructor({ small, shift, code }) {
        this.code = code;
        this.small = small;
        this.shift = shift;
        this.isFnKey = Boolean(small.match(/Ctrl|Arr|Alt|Shift|Tab|Back|Del|Enter|CapsLock|Win|IntlBackslash/))

        if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
            this.sub = create('div', 'sub', this.shift);
          } else {
            this.sub = create('div', 'sub', '');
          }
          
      
          this.letter = create('div', 'letter', small);
          if (code === 'Win') this.letter = create('i', 'material-icons', 'mic_off');
          if (code === 'IntlBackslash') this.letter = create('i', 'material-icons', 'volume_off');

          this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code],
            this.isFnKey ? ['fn', 'true'] : ['fn', 'false']);
        }
}