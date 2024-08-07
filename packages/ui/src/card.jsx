"use client";
import {
  Card as NCard,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { title as Title } from "./primitive";
import { Button } from "./Shadcn/button";

export function Card({ title, children, href }) {
  return (
    <NCard className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <h1 className={Title()}>{title}</h1>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
      <Divider />
      <CardFooter>
        <Button>
          <Link isExternal showAnchorIcon href={href} className="text-white">
            Link
          </Link>
        </Button>
      </CardFooter>
    </NCard>
  );
}
