import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import { Button, Props } from '.';

describe('<Button />', () => {
  afterEach(cleanup);

  const initialProps: Props = {
    label: 'Click Me!',
    onClick: vi.fn(),
  };

  it('Should match with the snapshot', () => {
    const { container } = render(<Button {...initialProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Should exec the onClick function when user hit the button', () => {
    render(<Button {...initialProps} />);

    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(initialProps.onClick).toHaveBeenCalled();
  });
});
