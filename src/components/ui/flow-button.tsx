import { ArrowRight } from "lucide-react";

type AnchorProps = Omit<React.ComponentPropsWithoutRef<"a">, "type"> & {
  text?: string;
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  text?: string;
};

type Props = AnchorProps | ButtonProps;

export function FlowButton(props: Props) {
  const { text = "Get Started", href, ...rest } = props as any;
  const Tag = href ? "a" : "button";
  return (
    <Tag
      {...rest}
      href={href}
      className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border border-brand-lime bg-transparent px-8 py-3 
    text-base font-semibold text-brand-lime cursor-pointer transition-all duration-[500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-brand-dark active:scale-[0.95]"
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-brand-lime fill-none z-[9] group-hover:left-4 group-hover:stroke-brand-dark 
      transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-lime rounded-[50%] opacity-0 group-hover:w-[220px] 
      group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight className="absolute w-4 h-4 right-4 stroke-brand-lime fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-brand-dark 
      transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
    </Tag>
  );
}
