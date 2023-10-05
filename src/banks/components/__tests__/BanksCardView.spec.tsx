import { RenderResult, render } from '@testing-library/react'
import { expect, describe, it, beforeAll } from 'vitest'

import { BankCardView } from '../BankCardView'
import { bankMock } from '../../mocks/bankMock'

describe('BankCardView', () => {
  describe('when banks card is mounted', () => {
    let renderResult: RenderResult

    beforeAll(() => {
      renderResult = render(<BankCardView bank={bankMock()} />)
    })

    it('should render the name', async () => {
      const name = await renderResult.findByText('Paga Todo')
      expect(name.innerHTML).toBe('Paga Todo')
    })
  })
})
