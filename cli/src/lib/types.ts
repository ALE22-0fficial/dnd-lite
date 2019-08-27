export interface ICharacterClass {
  boosts: {
    str?: number;
    con?: number;
    dex?: number;
    cha?: number;
    wis?: number;
    int?: number;
  };
  kickers: {
    dualWield?: boolean;
    armor: number;
    weapons: {
      ranged: number;
      blunt: number;
      edged: number;
    };
    spells?: any[];
  };
}

export interface IWeaponTypes {
  light: string[];
  medium: string[];
  heavy: string[];
}

export interface IArmorTypes {
  light: string[];
  medium: string[];
  heavy: string[];
}
