import { expect, it } from 'vitest'
import { simpleAnimator } from '../packages/core/src'

import { input, output } from './fixture'

it('animator', () => {
  const animator = simpleAnimator(input, output)
  expect([...animator]).toMatchInlineSnapshot(`
    [
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '../src
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 74,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '../sr
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 73,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '../s
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 72,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '../
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 71,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '..
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 70,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '.
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 69,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from '
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 68,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from 
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 67,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } from
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 66,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } fro
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 65,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } fr
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 64,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } f
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 63,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one } 
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 62,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one }
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 61,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one 
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 60,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { one
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 59,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { on
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 58,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { o
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 57,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import { 
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 56,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import {
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 55,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import 
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 54,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    import
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 53,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    impor
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 52,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    impo
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 51,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    imp
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 50,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    im
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 49,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    i
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 48,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 47,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 46,
        "patch": {
          "from": 75,
          "length": 29,
          "type": "removal",
        },
        "patchIndex": 0,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('exporte', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 88,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('export', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 87,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('expor', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 86,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('expo', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 85,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('exp', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 84,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('ex', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 83,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('e', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 82,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 81,
        "patch": {
          "from": 89,
          "length": 8,
          "type": "removal",
        },
        "patchIndex": 1,
      },
      {
        "char": "o",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('o', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 82,
        "patch": {
          "from": 81,
          "text": "one",
          "type": "insert",
        },
        "patchIndex": 2,
      },
      {
        "char": "n",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('on', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 83,
        "patch": {
          "from": 81,
          "text": "one",
          "type": "insert",
        },
        "patchIndex": 2,
      },
      {
        "char": "e",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
      })
    })
    ",
        "cursor": 84,
        "patch": {
          "from": 81,
          "text": "one",
          "type": "insert",
        },
        "patchIndex": 2,
      },
      {
        "char": " ",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
       })
    })
    ",
        "cursor": 123,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": " ",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        })
    })
    ",
        "cursor": 124,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": " ",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
         })
    })
    ",
        "cursor": 125,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": " ",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
          })
    })
    ",
        "cursor": 126,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "e",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        e  })
    })
    ",
        "cursor": 127,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "x",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        ex  })
    })
    ",
        "cursor": 128,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "p",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        exp  })
    })
    ",
        "cursor": 129,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "e",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expe  })
    })
    ",
        "cursor": 130,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "c",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expec  })
    })
    ",
        "cursor": 131,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "t",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect  })
    })
    ",
        "cursor": 132,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "(",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(  })
    })
    ",
        "cursor": 133,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "t",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(t  })
    })
    ",
        "cursor": 134,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "w",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(tw  })
    })
    ",
        "cursor": 135,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "o",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two  })
    })
    ",
        "cursor": 136,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": ")",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two)  })
    })
    ",
        "cursor": 137,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": ".",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).  })
    })
    ",
        "cursor": 138,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "t",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).t  })
    })
    ",
        "cursor": 139,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "o",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).to  })
    })
    ",
        "cursor": 140,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "E",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toE  })
    })
    ",
        "cursor": 141,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "q",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEq  })
    })
    ",
        "cursor": 142,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "u",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqu  })
    })
    ",
        "cursor": 143,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "a",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqua  })
    })
    ",
        "cursor": 144,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "l",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual  })
    })
    ",
        "cursor": 145,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "(",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual(  })
    })
    ",
        "cursor": 146,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "2",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual(2  })
    })
    ",
        "cursor": 147,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": ")",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual(2)  })
    })
    ",
        "cursor": 148,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
      {
        "char": "
    ",
        "content": "
    import { describe, expect, it } from 'vitest'
    
    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual(2)
      })
    })
    ",
        "cursor": 149,
        "patch": {
          "from": 122,
          "text": "    expect(two).toEqual(2)
    ",
          "type": "insert",
        },
        "patchIndex": 3,
      },
    ]
  `)
})
