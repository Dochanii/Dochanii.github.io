/**
 * 🔗 에러 대시보드 리포터 (TypeScript)
 * 다른 React/TypeScript 프로젝트에서 에러를 자동으로 수집하는 스크립트
 * 
 * 사용법:
 * 1. 이 파일을 프로젝트의 src/lib/ 폴더에 복사
 * 2. App.tsx 또는 index.tsx에서 import
 * 3. ERROR_DASHBOARD_URL을 실제 주소로 변경
 */

// ⚠️ 여기를 수정하세요!
const ERROR_DASHBOARD_URL = 'http://localhost:3001/api/errors';  // 대시보드 포트에 맞게 변경
const PROJECT_NAME = 'EUIJONG-PORTFOLIO';  // 프로젝트 이름 변경

// 타입 정의
interface ErrorData {
  message: string;
  stack?: string;
  source?: string;
  title?: string;
  tags?: string[];
}

interface ErrorPayload {
  errorMessage: string;
  collectionType: 'auto-browser' | 'auto-terminal' | 'manual';
  source: string;
  stackTrace: string;
  title: string;
  tags: string[];
}

// 중복 에러 방지
const reportedErrors = new Set<string>();

/**
 * 에러를 대시보드로 전송
 */
async function reportError(errorData: ErrorData): Promise<void> {
  // 중복 체크
  const errorKey = `${errorData.message}-${errorData.source}`;
  if (reportedErrors.has(errorKey)) return;
  
  reportedErrors.add(errorKey);
  setTimeout(() => reportedErrors.delete(errorKey), 60000);
  
  const payload: ErrorPayload = {
    errorMessage: errorData.message,
    collectionType: 'auto-browser',
    source: errorData.source || PROJECT_NAME,
    stackTrace: errorData.stack || '',
    title: errorData.title || errorData.message,
    tags: errorData.tags || [PROJECT_NAME, 'External'],
  };
  
  try {
    const response = await fetch(ERROR_DASHBOARD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (response.ok) {
      console.log('✅ 에러가 대시보드로 전송되었습니다');
    }
  } catch (err) {
    // 대시보드가 실행 중이 아니면 조용히 실패
  }
}

// 글로벌 에러 핸들러 설정
if (typeof window !== 'undefined') {
  // 1. JavaScript 런타임 에러
  window.addEventListener('error', (event: ErrorEvent) => {
    reportError({
      message: event.error?.message || event.message,
      stack: event.error?.stack,
      source: `${event.filename}:${event.lineno}:${event.colno}`,
      title: `Runtime Error in ${PROJECT_NAME}`,
      tags: [PROJECT_NAME, 'Runtime Error'],
    });
  });
  
  // 2. Promise Rejection 에러
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    reportError({
      message: error.message,
      stack: error.stack,
      source: 'Promise Rejection',
      title: `Unhandled Promise in ${PROJECT_NAME}`,
      tags: [PROJECT_NAME, 'Promise'],
    });
  });
  
  console.log(`🔗 에러 대시보드 연결됨 [${PROJECT_NAME}] → ${ERROR_DASHBOARD_URL}`);
}

export { reportError };
export type { ErrorData };
