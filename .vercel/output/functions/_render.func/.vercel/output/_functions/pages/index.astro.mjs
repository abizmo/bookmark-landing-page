/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, e as addAttribute, s as spreadAttributes, f as renderSlot, g as renderHead } from '../chunks/astro/server_tA7Ii4fb.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormContext, Controller, useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium leading-none border-2 py-4",
  {
    variants: {
      variant: {
        primary: "bg-primary-400 text-neutral-100 shadow-md shadow-primary-400/25 border-primary-400 hover:text-primary-400 hover:bg-neutral-100 focus-within:text-primary-400 focus-within:bg-neutral-100 outline-none",
        accent: "bg-accent-400 text-neutral-100 shadow-md shadow-accent-400/25 border-accent-400 hover:text-accent-400 hover:bg-neutral-100 focus-within:text-accent-400 focus-within:bg-neutral-100 outline-none",
        neutral: "bg-neutral-400/5 text-neutral-400 shadow-md shadow-neutral-400/25 border-neutral-400/5  hover:border-neutral-400 hover:bg-neutral-100 focus-within:border-neutral-400 focus-within:bg-neutral-100 outline-none",
        outline: "bg-transparent text-current border-current"
      },
      size: {
        default: "w-full md:px-6 md:w-fit",
        wide: "px-8"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-12 px-4 rounded-md w-full text-sm text-neutral-900 placeholder:text-neutral-400/50 focus-visible:outline-none",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
const FormItem = React.forwardRef(({ error = false, className, ...props }, ref) => {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "relative",
        {
          "bg-accent-400 pt-[2px] px-[2px] pb-2 rounded-md space-y-2": error,
          "after:content-[''] after:absolute after:top-4 after:right-4 after:h-5 after:w-5  after:bg-[url('/images/icon-error.svg')]": error
        },
        className
      ),
      ...props
    }
  ) });
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-xs italic pl-4", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";

const formSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Whoops, make sure it's an email" })
});
const SubmitForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });
  function onSubmit(data) {
    console.log(data);
  }
  const { errors } = form.formState;
  return /* @__PURE__ */ jsx(FormProvider, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "grid gap-4 md:flex md:w-[450px] md:items-start md:mx-auto",
      onSubmit: form.handleSubmit(onSubmit),
      children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { error: !!errors.email, className: "md:flex-1", children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Enter your email address", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Button, { type: "submit", variant: "accent", className: "capitalize", children: "Contact us" })
      ]
    }
  ) });
};

const SecondaryHeading = ({
  className,
  tag: Tag = "h2",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Tag,
    {
      className: cn([
        "text-2xl font-medium leading-tight md:text-4xl",
        className
      ]),
      ...props,
      children
    }
  );
};

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-8 text-center | cta__header" data-astro-cid-c7edmhxs> <p class="mb-2 md:mb-9 | cta__text" data-astro-cid-c7edmhxs>35.000+ already joined</p> ${renderComponent($$result, "SecondaryHeading", SecondaryHeading, { "data-astro-cid-c7edmhxs": true }, { "default": ($$result2) => renderTemplate`Stay up-to-date with what we're doing` })} </div> ${renderComponent($$result, "SubmitForm", SubmitForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/submit-form", "client:component-export": "default", "data-astro-cid-c7edmhxs": true })} `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { logo, browser, version, href, class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["shadow-lg rounded-lg", className], "class:list")}${spreadAttributes(props)} data-astro-cid-hpdudsth> <header class="py-10 text-center" data-astro-cid-hpdudsth> <img class="inline-block mb-9"${addAttribute(logo, "src")}${addAttribute(browser, "alt")} data-astro-cid-hpdudsth> <h4 class="mb-4 | card__title" data-astro-cid-hpdudsth>Add to ${browser}</h4> <p data-astro-cid-hpdudsth>Minimum version ${version}</p> </header> <main class="text-center | card__body" data-astro-cid-hpdudsth> <a href="#"${addAttribute(["capitalize", buttonVariants()], "class:list")} data-astro-cid-hpdudsth>
Add & install extension
</a> </main> </article> `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/card.astro", void 0);

const $$DownloadExtension = createComponent(($$result, $$props, $$slots) => {
  const browsers = [
    {
      logo: "/images/logo-chrome.svg",
      browser: "Chrome",
      version: "62",
      href: "#"
    },
    {
      logo: "/images/logo-firefox.svg",
      browser: "Firefox",
      version: "55",
      href: "#"
    },
    {
      logo: "/images/logo-opera.svg",
      browser: "Opera",
      version: "46",
      href: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="text-center mb-8 md:mb-14" data-astro-cid-eduaba4s> ${renderComponent($$result, "SecondaryHeading", SecondaryHeading, { "className": "text-neutral-900 mb-4", "data-astro-cid-eduaba4s": true }, { "default": ($$result2) => renderTemplate`
Download the extension
` })} <p class="text-balance md:max-w-prose md:mx-auto" data-astro-cid-eduaba4s>
We’ve got more browsers in the pipeline. Please do let us know if you’ve got
    a favourite you’d like us to prioritize.
</p> </div> <div class="even-columns gap-10 cards" data-astro-cid-eduaba4s> ${browsers.map((browser) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...browser, "class": "even:mt-10 last:mt-20", "data-astro-cid-eduaba4s": true })}`)} </div> `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/download-extension.astro", void 0);

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "grid md:flex border-t border-t-neutral-400/25 md:border-none md:justify-center",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "relative py-5 md:w-60 border-b border-b-neutral-400/25 text-base font-semibold capitalize data-[state=active]:text-neutral-900 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:h-1 data-[state=active]:after:w-36 md:data-[state=active]:after:w-full data-[state=active]:after:bg-accent-400 data-[state=active]:after:bottom-0 data-[state=active]:after:left-1/2 data-[state=active]:after:-translate-x-1/2",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn("even-columns gap-12 md:gap-28 items-center", className),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const features = [
  {
    id: "bookmark",
    name: "Simple bookmarking",
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    href: "#"
  },
  {
    id: "search",
    name: "Speedy searching",
    img: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    href: "#"
  },
  {
    id: "share",
    name: "Easy sharing",
    img: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    href: "#"
  }
];
const FeaturesTab = () => {
  return /* @__PURE__ */ jsxs(Tabs, { defaultValue: features[0].id, children: [
    /* @__PURE__ */ jsx(TabsList, { className: "mb-20", children: features.map((f) => /* @__PURE__ */ jsx(TabsTrigger, { value: f.id, children: f.name }, f.id)) }),
    features.map((f) => /* @__PURE__ */ jsxs(TabsContent, { value: f.id, children: [
      /* @__PURE__ */ jsx("div", { className: "justify-self-end relative bg-decorator bg-decorator--reverse", children: /* @__PURE__ */ jsx("img", { src: f.img, alt: f.name }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx(
          SecondaryHeading,
          {
            tag: "h3",
            className: "mb-4 md:mb-6 text-neutral-900",
            children: f.title
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-balance", children: f.description }),
        /* @__PURE__ */ jsx("a", { href: f.href, className: buttonVariants(), children: "More Info" })
      ] })
    ] }, f.id))
  ] });
};

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-10 text-center max-w-[56ch] m-auto"> ${renderComponent($$result, "SecondaryHeading", SecondaryHeading, { "className": "mb-4 text-neutral-900" }, { "default": ($$result2) => renderTemplate`Features` })} <p class="text-balance">
Our aim is to make it quick and easy for you to access your favourite
    websites. Your bookmarks sync between your devices so you can access them on
    the go.
</p> </div> ${renderComponent($$result, "FeaturesTab", FeaturesTab, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/features-tab", "client:component-export": "default" })}`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/features.astro", void 0);

const $$Astro$2 = createAstro();
const $$PrimaryHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PrimaryHeading;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute([
    "text-3xl font-medium leading-tight capitalize text-neutral-900 md:text-5xl md:leading-tight",
    className
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/ui/primary-heading.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="even-columns gap-12 items-center"> <div class="text-center md:text-left order-2 md:order-1 max-w-lg"> ${renderComponent($$result, "PrimaryHeading", $$PrimaryHeading, { "class": "mb-4" }, { "default": ($$result2) => renderTemplate` A simple bookmark manager ` })} <p class="mb-8">
A clean and simple interface to organize your favourite websites. Open a
      new browser tab and see your sites load instantly. Try it for free.
</p> <div class="flex md:block"> <a href="#"${addAttribute(["mr-3", buttonVariants()], "class:list")}> Get it on Chrome </a> <a href="#"${addAttribute(buttonVariants({ variant: "neutral" }), "class")}>
Get it on Firefox
</a> </div> </div> <div class="order-1 md:order-2 relative | bg-decorator"> <img src="./images/illustration-hero.svg" alt="bookmark screenshot"> </div> </div>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/hero.astro", void 0);

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-neutral-900 font-medium transition-all hover:text-accent-400 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-accent-400",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-primary-400 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down leading-loose",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqs = [
  {
    value: "faq-1",
    question: "What is Bookmark?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
  },
  {
    value: "faq-2",
    question: "How can I request a new browser?",
    answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
  },
  {
    value: "faq-3",
    question: "Is there a mobile app?",
    answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
  },
  {
    value: "faq-4",
    question: "What about other Chromium browsers?",
    answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
  }
];
function FaqAccordion({ className }) {
  return /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: cn("w-full", className), children: faqs.map((faq) => /* @__PURE__ */ jsxs(AccordionItem, { value: faq.value, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { children: faq.question }),
    /* @__PURE__ */ jsx(AccordionContent, { children: faq.answer })
  ] }, faq.value)) });
}

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-lg mx-auto"> <div class="text-center"> ${renderComponent($$result, "SecondaryHeading", SecondaryHeading, { "className": "mb-4 text-neutral-900" }, { "default": ($$result2) => renderTemplate`
Frequently Asked Questions
` })} <p class="mb-10">
Here are some of our FAQs. If you have any other questions you´d like
      answered please feel free to email us.
</p> </div> ${renderComponent($$result, "FaqAccordion", FaqAccordion, { "client:load": true, "className": "mb-14", "client:component-hydration": "load", "client:component-path": "@/components/faq-accordion", "client:component-export": "default" })} <div class="text-center"> <a href="#"${addAttribute(buttonVariants(), "class")}>More Info</a> </div> </div>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/faq.astro", void 0);

const $$IconFacebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="currentColor" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path> </svg>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/assets/icon-facebook.astro", void 0);

const $$IconTwitter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20"><path fill="currentColor" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"></path></svg>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/assets/icon-twitter.astro", void 0);

const $$Astro$1 = createAstro();
const $$LogoBookmark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoBookmark;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")}${spreadAttributes(props)} width="148" height="25" viewBox="0 0 148 25" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g7ukj4ih> <g fill="none" fill-rule="evenodd" data-astro-cid-g7ukj4ih> <path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" class="text" fill-rule="nonzero" data-astro-cid-g7ukj4ih></path> <g data-astro-cid-g7ukj4ih> <circle cx="12.5" cy="12.5" r="12.5" data-astro-cid-g7ukj4ih></circle> <path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" class="flag" data-astro-cid-g7ukj4ih></path> </g> </g> </svg> `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/assets/logo-bookmark.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-10 primary-footer bg-neutral-900 text-neutral-100" data-astro-cid-k2f5zb5c> <div class="container" data-astro-cid-k2f5zb5c> <div class="grid justify-items-center gap-10 md:flex md:items-center md:justify-between" data-astro-cid-k2f5zb5c> <div class="grid gap-10 md:flex md:gap-14 md:items-center" data-astro-cid-k2f5zb5c> <a href="/" data-astro-cid-k2f5zb5c>${renderComponent($$result, "LogoBookmark", $$LogoBookmark, { "data-astro-cid-k2f5zb5c": true })}</a> <nav class="footer-navigation" data-astro-cid-k2f5zb5c> <ul role="list" class="grid md:flex" data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="#" data-astro-cid-k2f5zb5c>Features</a></li> <li data-astro-cid-k2f5zb5c><a href="#" data-astro-cid-k2f5zb5c>Pricing</a></li> <li data-astro-cid-k2f5zb5c><a href="#" data-astro-cid-k2f5zb5c>Contact</a></li> </ul> </nav> </div> <nav class="social-navigation" data-astro-cid-k2f5zb5c> <ul role="list" class="nav-list" data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="#" data-astro-cid-k2f5zb5c>${renderComponent($$result, "IconFacebook", $$IconFacebook, { "data-astro-cid-k2f5zb5c": true })}</a></li> <li data-astro-cid-k2f5zb5c><a href="#" data-astro-cid-k2f5zb5c>${renderComponent($$result, "IconTwitter", $$IconTwitter, { "data-astro-cid-k2f5zb5c": true })}</a></li> </ul> </nav> </div> </div> </footer> `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="primary-header pt-10 md:pt-12" data-astro-cid-hpnw4vwy> <div class="container" data-astro-cid-hpnw4vwy> <div class="flex items-center justify-between" data-astro-cid-hpnw4vwy> <a href="/" data-astro-cid-hpnw4vwy>${renderComponent($$result, "LogoBookmark", $$LogoBookmark, { "id": "logo-header", "data-astro-cid-hpnw4vwy": true })}</a> <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" data-astro-cid-hpnw4vwy> <img class="icon-hamburger" src="./images/icon-hamburger.svg" alt="" aria-hidden="true" data-astro-cid-hpnw4vwy> <img class="icon-close" src="./images/icon-close.svg" alt="" aria-hidden="true" hidden data-astro-cid-hpnw4vwy> <span class="sr-only" data-astro-cid-hpnw4vwy>Menu</span> </button> <nav class="primary-navigation" data-astro-cid-hpnw4vwy> <ul role="list" class="nav-list" id="primary-navigation" aria-label="primary" data-astro-cid-hpnw4vwy> <li data-astro-cid-hpnw4vwy><a href="#" data-astro-cid-hpnw4vwy>Features</a></li> <li data-astro-cid-hpnw4vwy><a href="#" data-astro-cid-hpnw4vwy>Pricing</a></li> <li data-astro-cid-hpnw4vwy><a href="#" data-astro-cid-hpnw4vwy>Contact</a></li> </ul> <a href="#"${addAttribute(["font-inherit desktop-login-button", buttonVariants({ variant: "accent", size: "wide" })], "class:list")} data-astro-cid-hpnw4vwy>
Login
</a> <a href="#"${addAttribute(["font-inherit mobile-login-button", buttonVariants({ variant: "outline", size: "wide" })], "class:list")} data-astro-cid-hpnw4vwy>
Login
</a> </nav> <nav class="social-navigation" data-astro-cid-hpnw4vwy> <a href="#" data-astro-cid-hpnw4vwy>${renderComponent($$result, "IconFacebook", $$IconFacebook, { "data-astro-cid-hpnw4vwy": true })}</a> <a href="#" data-astro-cid-hpnw4vwy>${renderComponent($$result, "IconTwitter", $$IconTwitter, { "data-astro-cid-hpnw4vwy": true })}</a> </nav> </div> </div> </header>  `;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/header.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Frontend Mentor | Bookmark landing page</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400..500&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mt-36"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/layouts/base-layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="md:py-20 overflow-hidden"> <div class="container"> ${renderComponent($$result2, "Hero", $$Hero, {})} </div> </section> <section class="py-16 md:py-20"> <div class="container"> ${renderComponent($$result2, "Features", $$Features, {})} </div> </section> <section class="py-16 md:py-20"> <div class="container"> ${renderComponent($$result2, "DownloadExtension", $$DownloadExtension, {})} </div> </section> <section class="py-16 mb-12 md:py-20 md:mb-16"> <div class="container"> ${renderComponent($$result2, "Faq", $$Faq, {})} </div> </section> <section class="py-16 bg-primary-400 text-neutral-100"> <div class="container"> ${renderComponent($$result2, "Cta", $$Cta, {})} </div> </section> ` })}`;
}, "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
