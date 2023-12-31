import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { FilledButton } from 'jds';
import CloudIcon from 'jds/assets/icons/cloud-bolt-svgrepo-com.svg';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';

import PageLayout from '@/components/layout/PageLayout';

const List = dynamic(() => import('@/components/users/List'), {
  ssr: false,
});

export default function Users() {
  return (
    <>
      <NextSeo title="Turborepo emotion realworld example - User list" />
      <PageLayout>
        <main>
          <h1>Users</h1>
          <CloudIcon width={100} height={100} />
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                // eslint-disable-next-line react/no-unstable-nested-components -- 나중에 제대로 하겠습니다..
                fallbackRender={({ error, resetErrorBoundary }) => (
                  <div>
                    There was an error!{' '}
                    <FilledButton
                      size="large"
                      css={{
                        border: '1px solid #000',
                        padding: 8,
                      }}
                      onClick={() => {
                        resetErrorBoundary();
                      }}
                    >
                      Try again
                    </FilledButton>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- 나중에 제대로 하겠습니다.. */}
                    <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
                  </div>
                )}
                onReset={reset}
              >
                <Suspense fallback={<Skeleton count={10} />}>
                  <List />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </main>
      </PageLayout>
    </>
  );
}
