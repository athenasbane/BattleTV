import {IPlayer} from '../types/interfaces/Player.interface';
export class PlayerModel implements IPlayer {
  name = '';
  primaryPoints = 0;
  secondaryPoints = 0;
  total() {
    return this.primaryPoints + this.secondaryPoints;
  }
}
