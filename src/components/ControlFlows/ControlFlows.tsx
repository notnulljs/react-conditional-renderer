export type TControlFlows = {
    classnames: string;
    children: any
}

export default function ControlFlows({ classnames, children }: TControlFlows) {
    let Container = ({ children }: any) => <>{children}</>

    if (classnames) {
        Container = ({ children }: any) => <div className={classnames}>{children}</div>
    }

    return (
    <Container>
        {children}
    </Container>
    )
}

