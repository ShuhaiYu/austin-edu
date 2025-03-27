import { useContext } from "react";
import { LangContext } from "@/app/layout";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

export default function LanguageSwitcher() {
  const langContext = useContext(LangContext);
  if (!langContext) return null;
  const { lang, setLang } = langContext;

  // 根据当前语言返回对应的图标和文字（小屏幕只显示图标）
  const renderSelected = () => {
    if (lang === "zh") {
      return (
        <div className="flex items-center">
          <Image src="/home/china.png" alt="中文" width={24} height={24} />
          <span className="hidden sm:inline ml-2">中文</span>
        </div>
      );
    }
    return (
      <div className="flex items-center">
        <Image src="/home/flag.png" alt="English" width={24} height={24} />
        <span className="hidden sm:inline ml-2">En</span>
      </div>
    );
  };

  return (
    <Select value={lang} onValueChange={(value) => setLang(value)}>
      <SelectTrigger className="w-[80px] sm:w-[100px] text-sm">
        {renderSelected()}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center space-x-2">
            <Image src="/home/flag.png" alt="English" width={24} height={24} />
            <span>En</span>
          </div>
        </SelectItem>
        <SelectItem value="zh">
          <div className="flex items-center space-x-2">
            <Image src="/home/china.png" alt="中文" width={24} height={24} />
            <span>中文</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
