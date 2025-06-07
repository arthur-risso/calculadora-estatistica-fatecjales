"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function IntervaloConfianca() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <main className="container w-full h-full flex flex-col items-center gap-2.5">
      <h1 className="font-bold text-4xl">Calculadora Intervalo de confiança</h1>

      {/* Proporção */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="font-bold">
            Proporção
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Para uma proporção</DialogTitle>
            <DialogDescription>
              Utilize para calcular uma proporção
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="p">P</Label>
              <Input type="number" placeholder="P" id="p" />

              <Label htmlFor="menosp">1 - P</Label>
              <Input type="number" placeholder="P" id="menosp" />

              <Label htmlFor="tamanho-amostra">Tamanho da Amostra</Label>
              <Input
                type="number"
                placeholder="Tamanho da Amostra"
                id="tamanho-amostra"
              />

              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" className="w-fit">
                      Grau de confiança
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      <DropdownMenuRadioItem value="ninety">
                        90%
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ninety-five">
                        95%
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ninety-nine">
                        99%
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div id="erro-proporcao">
                  <p className="font-bold text-primary">Erro de Proporção: </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MÉDIA */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="font-bold">
            Média
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
