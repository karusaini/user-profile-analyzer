import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const LanguageCard: React.FC<SelectProps> = ({ options, label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const handleChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <Card className="w-full max-w-md bg-white/60 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex justify-between items-center w-full">
                {selectedOption}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => handleChange("All")}>
                All
              </DropdownMenuItem>
              {options.map((option, index) => (
                <DropdownMenuItem key={index} onClick={() => handleChange(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
