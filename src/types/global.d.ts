declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  interface String {
      fancyFormat(opts: StringFormatOptions): string;
  }

  interface Event {
    a: string;
  }

  interface StringFormatOptions {
    fancinessLevel: number;
  }
}

declare type NumberString =  string | number;

// export type NumberString = string | number

// export type CustomEvent = string | number

export interface StringFormatOptions {
  fancinessLevel: number;
}