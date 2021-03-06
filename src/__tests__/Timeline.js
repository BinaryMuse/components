import 'babel-polyfill'

import {COMMON, FLEX, LAYOUT} from '../constants'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
import {render, rendersClass} from '../utils/testing'

import React from 'react'
import Timeline from '../Timeline'
expect.extend(toHaveNoViolations)

describe('Timeline', () => {
  it('implements system props', () => {
    expect(Timeline).toImplementSystemProps(COMMON)
    expect(Timeline).toImplementSystemProps(FLEX)
    expect(Timeline).toImplementSystemProps(LAYOUT)
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<Timeline />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('has default theme', () => {
    expect(Timeline).toSetDefaultTheme()
  })

  it('renders', () => {
    expect(render(<Timeline />)).toMatchSnapshot()
  })

  it('renders with clipSidebar prop', () => {
    expect(render(<Timeline clipSidebar />)).toMatchSnapshot()
  })
})

describe('Timeline.Item', () => {
  it('implements system props', () => {
    expect(Timeline).toImplementSystemProps(COMMON)
    expect(Timeline).toImplementSystemProps(FLEX)
    expect(Timeline).toImplementSystemProps(LAYOUT)
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<Timeline.Item />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('has default theme', () => {
    expect(Timeline.Item).toSetDefaultTheme()
  })

  it('renders', () => {
    expect(render(<Timeline.Item />)).toMatchSnapshot()
  })

  it('renders with condensed prop', () => {
    expect(render(<Timeline.Item condensed />)).toMatchSnapshot()
  })

  it('adds the Timeline-Item class', () => {
    expect(rendersClass(<Timeline.Item />, 'Timeline-Item')).toEqual(true)
  })
})

describe('Timeline.Badge', () => {
  it('implements system props', () => {
    expect(Timeline).toImplementSystemProps(COMMON)
    expect(Timeline).toImplementSystemProps(LAYOUT)
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<Timeline.Badge />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('has default theme', () => {
    expect(Timeline.Badge).toSetDefaultTheme()
  })

  it('renders', () => {
    expect(render(<Timeline.Badge />)).toMatchSnapshot()
  })
})
