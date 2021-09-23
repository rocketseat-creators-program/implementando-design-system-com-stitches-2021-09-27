import { styled } from '@/styles';

const Flex = styled(`div`, {
  display: `flex`,
});

const Button = styled(`button`, {
  border: 0,
  appearance: `none`,
  cursor: `pointer`,

  transition: `filter 0.2s`,
  fontWeight: `bold`,

  //Caso queira adicionar um hover
  '&:hover': {
    filter: `brightness(0.9)`,
  },

  $$shadowColor: ``,

  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `#fff`,
      },
      shape: {
        backgroundColor: `$shape`,
        color: `#fff`,
      },
    },
    size: {
      small: {
        padding: `$16 $32`,
      },
      full: {
        padding: `$16 $32`,
        flex: 1,
      },
    },
    radius: {
      default: {
        borderRadius: `$default`,
      },
      full: {
        borderRadius: `$full`,
      },
    },
    outlined: {
      true: {
        boxShadow: `0px 0px 0 2px $$shadowColor`,
      },
    },
  },

  compoundVariants: [
    {
      color: `primary`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$primary`,
        background: `transparent`,
      },
    },
    {
      color: `shape`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$shape`,
        background: `transparent`,
      },
    },
  ],

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    outlined: true,
  },
});

export default function Home() {
  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <Button type="button" color="primary" outlined={false}>
        EXPERTS CLUB
      </Button>
      <Button type="button" color="shape" radius="full">
        EXPERTS CLUB
      </Button>
    </Flex>
  );
}
