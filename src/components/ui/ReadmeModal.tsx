import { X, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  repoUrl: string;
}

export const ReadmeModal = ({ isOpen, onClose, repoUrl }: ReadmeModalProps) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen && repoUrl) {
      setLoading(true);
      setError(false);

      const rawUrl = repoUrl
        .replace('github.com', 'raw.githubusercontent.com')
        .replace(/\/$/, '') + '/main/README.md';

      fetch(rawUrl)
        .then((res) => {
          if (!res.ok) throw new Error('README를 찾을 수 없습니다.');
          return res.text();
        })
        .then((text) => setContent(text))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [isOpen, repoUrl]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-7xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white rounded-t-2xl">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            README.md
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto leading-relaxed text-slate-600 bg-white rounded-b-2xl min-h-[300px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-400">
              <Loader2 className="animate-spin" size={32} />
              <p>GitHub에서 데이터를 가져오는 중...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full text-red-500">
              <p>README 파일을 불러오지 못했습니다.</p>
              <p className="text-sm text-slate-400 mt-2">Main 브랜치에 README.md가 있는지 확인해주세요.</p>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:underline prose-pre:bg-slate-100 prose-pre:text-slate-800">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};