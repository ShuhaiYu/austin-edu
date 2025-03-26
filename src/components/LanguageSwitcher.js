
import { useContext } from "react";
import { LangContext } from "@/app/layout";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

export default function LanguageSwitcher() {
  const langContext = useContext(LangContext);
  if (!langContext) return null;
  const { lang, setLang } = langContext;

  return (
    <Select value={lang} onValueChange={(value) => setLang(value)}>
      <SelectTrigger className="w-[132px] text-sm">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center space-x-2">
            <Image
              src="/home/flag.png"
              alt="English"
              width={24}
              height={24}
            />
            <span>English</span>
          </div>
        </SelectItem>

        <SelectItem value="zh">
          <div className="flex items-center space-x-2">
            <Image
              src="/home/china.png"
              alt="中文"
              width={24}
              height={24}
            />
            <span>中文</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
